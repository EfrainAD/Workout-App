import React from 'react'
import { theme } from '../../infrastructure/theme'
import {
   StyledView,
   TodayContainer,
   TodayText,
   CalendarIcon,
   DaysOfWeekContainer,
   CalendarDayContainer,
   CalendarDayText,
} from './Calandar.styles'

const CalendarDay = ({ day, date, backgroundColor }) => {
   return (
      <CalendarDayContainer style={{ backgroundColor }}>
         <CalendarDayText>{day}</CalendarDayText>
         <CalendarDayText>{date}</CalendarDayText>
      </CalendarDayContainer>
   )
}

const Calendar = (props) => {
   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', ' FRI ', 'SAT']

   const currentDate = new Date()
   const currentDayIndex = currentDate.getDay()

   const weekDates = Array.from({ length: 7 }, (_, i) => {
      const day = new Date()
      day.setDate(currentDate.getDate() - currentDayIndex + i)
      return day.getDate()
   })

   const formattedDate = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
   }).format(currentDate)

   return (
      <StyledView>
         <TodayContainer>
            <TodayText>{`Today, ${formattedDate}`}</TodayText>
            <CalendarIcon
               name="calendar"
               size={24}
               color={theme.colors.icon.tertiary}
            />
         </TodayContainer>
         <DaysOfWeekContainer>
            {daysOfWeek.map((day, index) => (
               <CalendarDay
                  key={index}
                  day={day}
                  date={weekDates[index]}
                  backgroundColor={
                     index === currentDayIndex
                        ? theme.colors.calendar.current.workout
                        : theme.colors.calendar.noWorkout
                  }
               />
            ))}
         </DaysOfWeekContainer>
      </StyledView>
   )
}

export default Calendar
