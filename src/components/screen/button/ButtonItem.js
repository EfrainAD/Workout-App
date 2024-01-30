import React from 'react'
import {
   StyledView,
   RowView,
   TitleText,
   ArrowIcon,
} from '../../../infrastructure/styledComponents/styledComonents'
import { theme } from '../../../infrastructure/theme'

const ButtonItem = ({ title, navigation }) => {
   return (
      <StyledView>
         <RowView>
            <TitleText>{title}</TitleText>
            <ArrowIcon
               name="arrow-forward-ios"
               size={24}
               color={theme.colors.icon.orange}
               onPress={() => navigation.navigate(title)}
            />
         </RowView>
      </StyledView>
   )
}

export default ButtonItem