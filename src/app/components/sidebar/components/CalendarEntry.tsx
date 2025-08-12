type CalendarEntryProps = {
    date: number;
    isToday: boolean;
    isCurrentMonth: boolean;
}

export default function CalendarEntry(props: CalendarEntryProps) {
    return (
        <p
            style={{
                color: !props.isCurrentMonth ? '#494949' : !props.isToday ? 'inherit' : '#8a5cf5',
                textAlign: 'center',
                alignSelf: 'center'
            }}
        >
            {props.date}
        </p>
    )
}