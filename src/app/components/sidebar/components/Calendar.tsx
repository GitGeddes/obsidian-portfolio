import CalendarEntry from "./CalendarEntry";
import useGithubActivity from "../hooks/useGithubActivity";

type CalendarProps = {
    username: string;
}

const DATE = new Date();

export default function Calendar(props: CalendarProps) {
    const {
        calendar,
        commits,
        isLoading,
        error,
        handleRefresh
    } = useGithubActivity(props.username, DATE);

    return (
        <div className="calendarContainer">
            <div className="row" style={{ marginLeft: 10 }}>
                <h1>{DATE.toLocaleString('default', { month: 'long' })}</h1>
                <h1
                    style={{
                        color: '#8a5cf5',
                        marginLeft: 5
                    }}
                >
                    {DATE.getFullYear()}
                </h1>
                { isLoading && <h5>Loading GitHub activity...</h5> }
                { error && <h5>Error loading GitHub activity: {error.message}</h5> }
            </div>
            <div className="calendar">
                {
                    calendar.map((val, index) => {
                        return (
                            <CalendarEntry
                                date={val.date}
                                isToday={val.isToday}
                                isCurrentMonth={val.isCurrentMonth}
                                commit={commits.contributions[index]}
                                key={index}
                            />
                        );
                    })
                }
            </div>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}
