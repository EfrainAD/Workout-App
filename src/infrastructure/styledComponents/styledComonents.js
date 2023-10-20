import { styled } from 'styled-components'
import { theme } from '../theme'

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
