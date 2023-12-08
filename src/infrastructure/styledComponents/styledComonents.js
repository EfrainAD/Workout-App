import { styled } from 'styled-components'
import { theme } from '../theme'
// import styled from 'styled-components/native';
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const CenteredView = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`

export const H1 = styled.Text`
   font-size: ${theme.fontSizes.h1};
   font-weight: bold;
`
export const Body = styled.Text`
   font-size: ${theme.fontSizes.body};
`

export const StyledView = styled(View)`
   background-color: ${theme.colors.background.neutral[2]};
   margin: 5px;
   margin-left: 8px;
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
export const SectionView = styled(View)`
   margin-top: 6px;
   margin-bottom: 6px;
`

export const TitleText = styled(Text)`
   color: ${theme.colors.text.neutral};
   font-size: 18px;
   font-weight: 600;
   padding-bottom: 0;
   margin-bottom: 0;
`

export const ArrowIcon = styled(MaterialIcons)`
   align-self: center;
`
