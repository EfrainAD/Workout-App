import React from 'react'
import { View, Text } from 'react-native'
import {
   StyledView,
   RowView,
   TitleText,
   ArrowIcon,
   SectionView,
} from '../settings/Settings.Screen.styles'
import { theme } from '../../infrastructure/theme'
import { SafeArea } from '../utilities/safeArea.component'

const ButtonCard = ({ title }) => {
   return (
      <StyledView>
         <RowView>
            <TitleText>{title}</TitleText>
            <ArrowIcon
               name="arrow-forward-ios"
               size={24}
               color={theme.colors.icon.neutral}
            />
         </RowView>
      </StyledView>
   )
}

const Settings = (props) => {
   const settingsButtons = [
      { title: 'Personal Information' },
      { title: 'Export Data' },
      { title: 'Connect to Other Accounts' },
   ]

   return (
      <SafeArea>
         <View
            style={{
               flex: 1,
               backgroundColor: theme.colors.background.neutral[0],
            }}
         >
            <SectionView>
               {settingsButtons.map((button, index) => (
                  <ButtonCard key={index} {...button} />
               ))}
            </SectionView>
         </View>
      </SafeArea>
   )
}

export default Settings
