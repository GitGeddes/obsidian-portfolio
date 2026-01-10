const NUM_CALENDAR_ELEMENTS = 42; // 7 days * 6 weeks

type CalendarDateEntryType = {
    date: number;
    isToday: boolean;
    isCurrentMonth: boolean;
    dateTime: Date;
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
                false,
                new Date(year - (currentMonth == 0 ? 1 : 0), (currentMonth + 12 - 1) % 12, previousDaysPerMonth - (monthStartDayOfWeek - i) + 1)
            );
        } else if (isCurrentMonth) {
            calendar[i] = createCalendarDate(
                i - monthStartDayOfWeek + 1,
                i - monthStartDayOfWeek + 1 === currentDateOfMonth,
                true,
                new Date(year, currentMonth, i - monthStartDayOfWeek + 1)
            );
        } else {
            calendar[i] = createCalendarDate(
                i - currentDaysPerMonth - monthStartDayOfWeek + 1,
                false,
                false,
                new Date(year + (currentMonth == 11 ? 1 : 0), (currentMonth + 1) % 12, i - currentDaysPerMonth - monthStartDayOfWeek + 1)
            );
        }
    }

    return calendar;
}

function createCalendarDate(date: number, isToday: boolean, isCurrentMonth: boolean, dateTime: Date): CalendarDateEntryType {
    return {
        date,
        isToday,
        isCurrentMonth,
        dateTime
    };
}

export default function useCalendar(DATE: Date) {
    const calendar = generateCalendar(DATE);

    return {
        calendar
    };
}