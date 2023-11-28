import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../infrastructure/theme';

const CalendarDay = ({ day, date, backgroundColor }) => {
  return (
    <View
      style={{
        height: 80,
        borderWidth: 2,
        borderColor: theme.colors.borders.neutral,
        backgroundColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Text
        style={{
          color: theme.colors.text.neutral,
          fontSize: 16,
          fontWeight: 600,
          padding: 5,
        }}
      >
        {day}
      </Text>
      <Text
        style={{
          color: theme.colors.text.neutral,
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {date}
      </Text>
    </View>
  );
};

const Calendar = (props) => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

  // Calculate dates for the entire week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const day = new Date();
    day.setDate(currentDate.getDate() - currentDayIndex + i);
    return day.getDate();
  });

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(currentDate);

  return (
    <View style={{ backgroundColor: theme.colors.background.neutral[2] }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 15,
          paddingRight: 19,
          paddingBottom: 17,
        }}
      >
        <Text
          style={{
            color: theme.colors.text.neutral,
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 600,
            paddingLeft: 11,
          }}
        >
          {`Today, ${formattedDate}`}
        </Text>
        <Feather
          style={{ alignSelf: 'center' }}
          name="calendar"
          size={24}
          color={theme.colors.icon.tertiary}
        />
      </View>
      {/* Days of Week */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {daysOfWeek.map((day, index) => (
          <CalendarDay
            key={index}
            day={day}
            date={weekDates[index]}
            backgroundColor={index === currentDayIndex ? theme.colors.calendar.current.workout : theme.colors.calendar.noWorkout}
          />
        ))}
      </View>
    </View>
  );
};

export default Calendar;