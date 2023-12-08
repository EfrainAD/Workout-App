import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../infrastructure/theme'

export const StyledView = styled(View)`
   background-color: ${theme.colors.background.neutral[2]};
`

export const TodayContainer = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   padding-top: 15px;
   padding-right: 19px;
   padding-bottom: 17px;
`

export const TodayText = styled(Text)`
   color: ${theme.colors.text.neutral};
   align-self: center;
   font-size: 16px;
   font-weight: 600;
   padding-left: 11px;
`

export const CalendarIcon = styled(Feather)`
   align-self: center;
`

export const DaysOfWeekContainer = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   padding-bottom: 20px;
   padding-left: 4px;
   padding-right: 4px;
`

export const CalendarDayContainer = styled(View)`
   height: 80px;
   border-width: 2px;
   border-color: ${theme.colors.borders.neutral};
   border-radius: 20px;
   align-items: center;
   justify-content: space-evenly;
`

export const CalendarDayText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 16px;
   font-weight: 600;
   padding: 5px;
`
