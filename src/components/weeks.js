import React from 'react'

import DaysWrapper from './dayswrapper'
import DayTitle from './days-title'

export default function Weeks(props) {
    console.log(props.month);
    const renderCalendarBox = () => {
        const calendarBoxArray = []

        for (let i = 1; i <= props.month.start_day; i++) {
            const date = props.month.previous_days - props.month.start_day + i;
            calendarBoxArray.push(<DaysWrapper key={`P-${i}`} date={date} overflow />)
        }

        for (let i = 1; i <= props.month.days_in_month; i++) {
            calendarBoxArray.push(<DaysWrapper key={`${props.month.id} - ${i}`} date={i} month={props.month} />)
        }

        for (let i = 1; i <= 35 - props.month.days_in_month - props.month.start_day; i++) {
            calendarBoxArray.push(<DaysWrapper key={`N-${i}`} date={i} overflow />)
        }

        return calendarBoxArray
    }

    return(
        <div>
            <DayTitle />
            <div className="week-setup">
                {renderCalendarBox()}
            </div>
        </div>
    )
}