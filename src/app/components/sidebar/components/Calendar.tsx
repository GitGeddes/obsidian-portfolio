import CalendarEntry from "./CalendarEntry";
import useGithubActivity from "../hooks/useGithubActivity";
import { useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

type CalendarProps = {
    username: string;
}

export default function Calendar(props: CalendarProps) {
    const [DATE, setDate] = useState<Date>(new Date());

    function resetDate() {
        setDate(new Date());
    }

    function decrementDate() {
        setDate(new Date(DATE.setMonth(DATE.getMonth() - 1 % 12)));
    }

    function incrementDate() {
        setDate(new Date(DATE.setMonth(DATE.getMonth() + 1 % 12)));
    }

    const {
        calendar,
        commits,
        isLoading,
        error,
        handleRefresh
    } = useGithubActivity(props.username, DATE);

    return (
        <div className="calendarContainer">
            { isLoading && <h5>Loading GitHub activity...</h5> }
            { error && <h5>Error loading GitHub activity: {error.message}</h5> }
            <div className="row" style={{ marginLeft: 10, justifyContent: 'space-between' }}>
                <div className="row">
                    <h1>{DATE.toLocaleString('default', { month: 'short' })}</h1>
                    <h1
                        className="linkCursor"
                        onClick={handleRefresh} // Secret refresh button
                        style={{
                            color: '#8a5cf5',
                            marginLeft: 5
                        }}
                    >
                        {DATE.getFullYear()}
                    </h1>
                </div>
                <div className="row">
                    <p
                        className="linkCursor"
                        onClick={decrementDate}
                    >
                        <KeyboardArrowLeft/>
                    </p>
                    <p
                        className="linkCursor calendarTextLabel"
                        onClick={resetDate}
                    >
                        TODAY
                    </p>
                    <p
                        className="linkCursor"
                        onClick={incrementDate}
                    >
                        <KeyboardArrowRight/>
                    </p>
                </div>
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
        </div>
    )
}
