import { SafeArea } from '../../components/utilities/safeArea.component'
import { View } from 'react-native'
import { ButtonContainer, YesButtonText, NoButtonText, TitleText, WarningText, StyledButton, StyledYesButton } from './deleteAccount.screen.styles'
import { theme } from '../../infrastructure/theme'

const DeleteAccountScreen = () => {
   return (
      // <SafeArea>
         <View
         style={{
            flex: 1,
            backgroundColor: theme.colors.background.neutral[0],
         }}
      >
            <TitleText>Are you sure you want to Delete?</TitleText>
            <WarningText>This will erase all data for this app</WarningText>
            <ButtonContainer>
            <StyledYesButton>
               <YesButtonText>Yes</YesButtonText>
            </StyledYesButton>
            <StyledButton>
               <NoButtonText>No</NoButtonText>
            </StyledButton>
         </ButtonContainer>
         </View>
      // </SafeArea>
   )
}

export default DeleteAccountScreen
