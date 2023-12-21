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
      <SafeArea >
      <View
         style={{
            flex: 1,
            backgroundColor: theme.colors.background.neutral[0],
         }}
      >
         <View
         style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 17,
            paddingTop: 5,
            paddingBottom: 20,
            paddingRight: 17,
         }}
      >
         <Text
            style={{
               color: theme.colors.text.neutral,
               fontSize: 24,
               fontWeight: 600,
            }}
         >
            Settings
         </Text>
      </View>
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
