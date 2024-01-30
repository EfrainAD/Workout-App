import { SafeArea } from '../../components/utilities/safeArea.component'
import {Container} from '../../infrastructure/styledComponents/styledComonents'
import SectionHeader from '../../components/screen/SectionHeader'
import {
   StyledView,
   RowView,
   TitleText,
   ArrowIcon,
} from '../../infrastructure/styledComponents/styledComonents'
import { theme } from '../../infrastructure/theme'

const ButtonCard = ({ title, navigation }) => {
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

const SecurityScreen = ({ navigation }) => {
   return (
      <SafeArea>
         <Container>
            <SectionHeader title="Security" />
            <ButtonCard title="Change Password" navigation={navigation} />
            <ButtonCard
               title="Multi-factor authentication"
               navigation={navigation}
            />
            <SectionHeader title="Privacy" />
            <ButtonCard navigation={navigation} title="Privacy Default" />
         </Container>
      </SafeArea>
   )
}

export default SecurityScreen
