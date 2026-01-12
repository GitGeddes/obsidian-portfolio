import { useCallback, useEffect, useState } from "react";
import useCache from "@/app/hooks/useCache";
import useCalendar from "./useCalendar";

export type ContributionDay = {
    date: string;
    count: number;
    level: number;
}

export type GithubActivityData = {
    totalCommits: number;
    contributions: ContributionDay[];
}

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
export default function useGithubActivity(username: string, DATE: Date) {
    const CACHE_TTL = 3600;
    const {
        calendar
    } = useCalendar(DATE);

    const [startDate] = useState<Date>(calendar[0].dateTime);
    const [endDate] = useState<Date>(calendar[calendar.length - 1].dateTime);

    const CACHE_KEY = `github-commits-${username}`;
    const {
        getCachedData,
        setCachedData,
        invalidateCache
    } = useCache<GithubActivityData>();

    const fetchGithubCommits = useCallback(async (username: string): Promise<GithubActivityData> => {
        if (!GITHUB_TOKEN) {
            console.error("No GitHub token!");
            throw new Error("GitHub token required");
        }

        const cachedData = getCachedData(CACHE_KEY);
        if (cachedData) {
            return cachedData.value;
        }

        try {
            const data = await queryGitHub(username, startDate, endDate);

            const totalCommits: number =
                (data.data?.user?.contributionsCollection?.totalCommitContributions || 0) +
                (data.data?.user?.contributionsCollection?.restrictedContributionsCount || 0);

            const contributions: ContributionDay[] = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks.flatMap((week: any) =>
                week.contributionDays.map((day: any) => ({
                    date: day.date,
                    count: day.contributionCount,
                    level: mapContributionLevel(day.contributionLevel),
                } as ContributionDay))
            ) || [];

            const githubActivityData: GithubActivityData = {
                totalCommits,
                contributions
            };

            setCachedData(CACHE_KEY, githubActivityData, CACHE_TTL);
            return githubActivityData;
        } catch (error) {
            console.error("Error fetching GitHub commits:", error);
            throw error;
        }
    }, []);

    const [commits, setCommits] = useState<GithubActivityData>({ totalCommits: 0, contributions: [] });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchCommits = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const totalCommits = await fetchGithubCommits(username);
            setCommits(totalCommits);
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    }, [username, fetchGithubCommits]);

    useEffect(() => {
        fetchCommits();
    }, []);

    const handleRefresh = useCallback(async () => {
        invalidateCache(CACHE_KEY);
        await fetchCommits();
    }, []);

    return {
        calendar,
        commits,
        isLoading,
        error,
        handleRefresh
    };
}

async function queryGitHub(username: string, startDate: Date, endDate: Date) {
    const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $username) {
                contributionsCollection(from: $from, to: $to) {
                    contributionCalendar {
                        weeks {
                            contributionDays {
                                contributionCount
                                contributionLevel
                                date
                            }
                        }
                    }
                    totalCommitContributions
                    restrictedContributionsCount
                }
            }
        }
    `;

    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables: {
                username,
                from: startDate.toISOString(),
                to: endDate.toISOString(),
            }
        })
    });

    const data = await response.json();
    if (data.errors) {
        throw new Error(data.errors[0].message);
    }
    return data;
}

export function mapContributionLevel(level: string): number {
    switch (level) {
        case 'NONE': return 0;
        case 'FIRST_QUARTILE': return 1;
        case 'SECOND_QUARTILE': return 2;
        case 'THIRD_QUARTILE': return 3;
        case 'FOURTH_QUARTILE': return 4;
        default: return 0;
    }
}