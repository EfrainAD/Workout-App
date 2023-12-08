import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import { theme } from '../../infrastructure/theme'

export const StyledView = styled(View)`
   background-color: ${theme.colors.background.neutral[2]};
   margin: 6px;
   margin-left: 6px;
   border-radius: 20px;
   border-width: 1px;
   border-color: ${theme.colors.borders.neutral};
   padding: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
`

export const RowView = styled(View)`
   flex-direction: row;
   justify-content: space-between;
`

export const GoalText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 16px;
   font-weight: 600;
   padding-bottom: 0;
   margin-bottom: 0;
`

export const WeightText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
   padding-bottom: 0;
   margin-bottom: 0;
`

export const DescriptionText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
`

export const ProgressBarView = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
