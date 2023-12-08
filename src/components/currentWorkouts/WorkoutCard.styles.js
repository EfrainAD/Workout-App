import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import { theme } from '../../infrastructure/theme'
import { MaterialIcons } from '@expo/vector-icons'

export const StyledView = styled(View)`
   background-color: ${theme.colors.background.neutral[2]};
   margin: 10px;
   margin-left: 6px;
   border-width: 1px;
   border-color: ${theme.colors.borders.neutral};
   border-radius: 20px;
   padding: 10px;
   padding-left: 20px;
   margin-bottom: 5px;
`

export const TitleText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 16px;
   font-weight: 600;
`

export const InfoContainer = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

export const DifficultyText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
`

export const DurationContainer = styled(View)`
   flex-direction: row;
   justify-content: space-around;
`

export const DurationText = styled(Text)`
   color: ${theme.colors.text.neutral};
   padding-right: 27px;
   font-size: 14px;
   font-weight: 600;
`

export const ArrowIcon = styled(MaterialIcons)`
   align-self: center;
`

export const DaysText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
   padding-top: 10px;
   padding-bottom: 10px;
`
