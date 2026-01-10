import { ContributionDay } from "../hooks/useGithubActivity";
import GitHubActivityDay from "./GitHubActivityDay";

type CalendarEntryProps = {
    date: number;
    isToday: boolean;
    isCurrentMonth: boolean;
    commit: ContributionDay;
}

export default function CalendarEntry(props: CalendarEntryProps) {
    return (
        <div className="calendarDayContainer">
            <p
                className="calendarTextLabel"
                style={{
                    color: !props.isCurrentMonth ? '#494949' : !props.isToday ? 'inherit' : '#8a5cf5',
                }}
            >
                {props.date}
            </p>
            <GitHubActivityDay commitDay={props.commit} isCurrentMonth={props.isCurrentMonth} />
        </div>
    )
}