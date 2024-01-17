import { styled } from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { Text, View, TextInput } from 'react-native'

export const ButtonCardStyle =  styled(View)`
   background-color: ${theme.colors.background.neutral[2]};
   margin-bottom: 14px;
   margin-left: auto;
   margin-right: auto;
   width: 92%;
   border-radius: 20px;
   border-width: 0px;
   border-color: ${theme.colors.borders.neutral};
   padding: 10px;
   padding-bottom: 10px;
   padding-left: 20px;
`

export const HelpContainer = styled.View`
    flex: 1;
    background-color: ${theme.colors.background.neutral[0]};
`
export const ButtonItem = styled(View)`
    background-color: ${theme.colors.background.neutral[2]};
    margin: 15px;
    margin-left: auto;
    margin-right: auto;
    border-width: 1px;
    width: 93%;
    border-color: ${theme.colors.borders.neutral};
    border-radius: 20px;
    padding: 10px;
    padding-left: 20px;
    margin-bottom: 5px;
`

export const ButtonRow = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   margin: 0px;
   margin-bottom: 0px;
   padding-right: 9px;
`
export const SearchItem = styled(View)`
    background-color: ${theme.colors.background.neutral[2]};
    margin-left: auto;
    margin-right: auto;
    width: 84%;
    border-width: 1px;
    border-color: ${theme.colors.borders.neutral};
    border-radius: 20px;
    padding: 10px;
    padding-left: 20px;
    margin-bottom: 25px;
`
export const TitleText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 18px;
   font-weight: 600;
   text-align: center;
   margin: 5px;
`

export const SectionLeft = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
   padding-bottom: 0;
   margin-left: 15px;
`

export const SectionRight = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 14px;
   font-weight: 600;
   padding-bottom: 0;
   margin-top: 20px;
   margin-bottom: 20px;
   margin-right: 8%;
   text-align: right;
`
export const ButtonGroup =  styled(View)`
    margin-top: 15px;
    margin-bottom: 35px;
`

export const DescriptionText = styled(Text)`
   color: ${theme.colors.text.description};
   text-align: center;
   font-size: 14px;
   font-weight: 600;
   margin: 5px;
`
export const CardTitle = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 16px;
   font-weight: 600;
   padding-bottom: 0;
   margin-right: 20px;
`