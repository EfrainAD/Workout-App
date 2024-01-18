import styled from 'styled-components/native'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { theme } from '../../infrastructure/theme'
import { MaterialIcons } from '@expo/vector-icons'

export const AnotherView = styled(View)`
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

export const StyledView = styled(View)`
   background-color: ${theme.colors.background.neutral[2]};
   padding: 10px;
   padding-left: 20px;
   margin-bottom: 5px;
`

export const TitleText = styled(Text)`
   color: ${theme.colors.text.neutral};
   margin: 20px;
   font-size: 16px;
   font-weight: 600;
   text-align: center;
`

export const WarningText = styled(Text)`
   color: ${theme.colors.text.warning};
   margin: 20px;
   font-size: 16px;
   font-weight: 600;
   text-align: center;
`

export const ButtonContainer = styled(View)`
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   margin: 20px;
`

export const CustomButton = styled(TouchableOpacity)`
   background-color: ${theme.colors.primary};
   padding: 10px;
   border-radius: 5px;
   justify-content: center;
`

export const YesButtonText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
`

export const NoButtonText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
`

export const StyledYesButton = styled(CustomButton)`
   background-color: #ff4d4d;
   border: 1px solid #f4b2b2;
   border-radius: 20px;
   padding: 15px;
`
export const StyledButton = styled(CustomButton)`
   border: 1px solid white;
   border-radius: 20px;
   padding: 15px;
`
