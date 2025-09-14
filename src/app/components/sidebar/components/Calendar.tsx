import { useCallback } from "react";
import CalendarEntry from "./CalendarEntry";

const NUM_CALENDAR_ELEMENTS = 42; // 7 days * 6 weeks

export default function Calendar() {
    const DATE = new Date();

    const calendar = useCallback(() => {
        return generateCalendar(DATE);
    }, []);

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
            </div>
            <div className="calendar">
                {
                    calendar().map((val, index) => {
                        return (
                            <CalendarEntry
                                date={val.date}
                                isToday={val.isToday}
                                isCurrentMonth={val.isCurrentMonth}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

type CalendarDateEntryType = {
    date: number;
    isToday: boolean;
    isCurrentMonth: boolean;
}

function generateCalendar(DATE: Date): CalendarDateEntryType[] {
    const currentDayOfWeek = DATE.getDay(); // Sunday - Saturday: 0 - 6
    const currentMonth = DATE.getMonth(); // January = 0
    const currentDateOfMonth = DATE.getDate();
    const monthStartDayOfWeek = (7 - (currentDateOfMonth % 7 - currentDayOfWeek - 1)) % 7;

    const year = DATE.getFullYear();
    const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

    const DAYS_PER_MONTH = [
        31, // Jan
        (isLeapYear) ? 29 : 28, // Feb
        31, // Mar
        30, // Apr
        31, // May
        30, // Jun
        31, // Jul
        31, // Aug
        30, // Sep
        31, // Oct
        30, // Nov
        31, // Dec
    ];

    const currentDaysPerMonth = DAYS_PER_MONTH[currentMonth];
    const previousDaysPerMonth = DAYS_PER_MONTH[(currentMonth + 12 - 1) % 12];

    const calendar = Array<CalendarDateEntryType>(NUM_CALENDAR_ELEMENTS);

    let isPreviousMonth = true;
    let isCurrentMonth = false;
    // isNextMonth implied

    for (let i = 0; i < calendar.length; i++) {
        if (monthStartDayOfWeek === i) {
            isPreviousMonth = false;
            isCurrentMonth = true;
        } else if (i - monthStartDayOfWeek >= currentDaysPerMonth) {
            isCurrentMonth = false;
        }

        if (isPreviousMonth) {
            calendar[i] = createCalendarDate(
                previousDaysPerMonth - (monthStartDayOfWeek - i) + 1,
                false,
                false
            );
        } else if (isCurrentMonth) {
            calendar[i] = createCalendarDate(
                i - monthStartDayOfWeek + 1,
                i - monthStartDayOfWeek + 1 === currentDateOfMonth,
                true
            );
        } else {
            calendar[i] = createCalendarDate(
                i - currentDaysPerMonth - monthStartDayOfWeek + 1,
                false,
                false
            );
        }
    }

    return calendar;
}

function createCalendarDate(date: number, isToday: boolean, isCurrentMonth: boolean): CalendarDateEntryType {
    return {
        date,
        isToday,
        isCurrentMonth
    };
}