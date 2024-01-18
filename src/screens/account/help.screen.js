import { SafeArea } from '../../components/utilities/safeArea.component'
import { Container } from '../../infrastructure/styledComponents/styledComonents'
import {
   StyledView,
   RowView,
   ArrowIcon,
   SectionView,
} from '../../infrastructure/styledComponents/styledComonents'
import { Text, View } from 'react-native'
import { theme } from '../../infrastructure/theme'
import {
   ButtonItem,
   SearchItem,
   TitleText,
   DescriptionText,
   CardTitle,
   SectionLeft,
   SectionRight,
   ButtonGroup,
   ButtonRow,
   ButtonCardStyle,
} from './help.screen.styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const HelpScreen = () => {
   const ButtonCard = ({ title, navigation }) => {
      return (
         <ButtonCardStyle>
            <ButtonRow>
               <CardTitle>{title}</CardTitle>
               <ArrowIcon
                  name="arrow-forward-ios"
                  size={24}
                  color={theme.colors.icon.tertiary}
                  onPress={() => navigation.navigate(title)}
               />
            </ButtonRow>
         </ButtonCardStyle>
      )
   }

   return (
      <SafeArea>
         <Container>
            <ScrollView>
               <SectionRight>Contact Us</SectionRight>
               <SearchItem>
                  <TextInput style={{ color: 'white' }}>Search</TextInput>
               </SearchItem>
               <ButtonGroup>
                  <ButtonItem>
                     <TitleText>Account Status</TitleText>
                     <DescriptionText>
                        Information on resolving account issues
                     </DescriptionText>
                  </ButtonItem>
                  <ButtonItem>
                     <TitleText>SetRep 101</TitleText>
                     <DescriptionText>
                        Basics to help you get started
                     </DescriptionText>
                  </ButtonItem>
                  <ButtonItem>
                     <TitleText>Rules & Report</TitleText>
                     <DescriptionText>
                        Information on Reddit policies, reporting, copyright,
                        and more
                     </DescriptionText>
                  </ButtonItem>
                  <ButtonItem>
                     <TitleText>Privacy & Security</TitleText>
                     <DescriptionText>
                        All about your account and data
                     </DescriptionText>
                  </ButtonItem>
                  <ButtonItem>
                     <TitleText>Q & A</TitleText>
                     <DescriptionText>
                        Frequently asked questions
                     </DescriptionText>
                  </ButtonItem>
               </ButtonGroup>

               <SectionLeft>Highlighted Questions and Information</SectionLeft>
               <ButtonGroup>
                  <ButtonCard title="My account has been locked as a security precaution"></ButtonCard>
                  <ButtonCard title="Can I change my username?"></ButtonCard>
                  <ButtonCard title="Recovering a lost or forgotten password"></ButtonCard>
                  <ButtonCard title="How Community feature works"></ButtonCard>
               </ButtonGroup>
            </ScrollView>
         </Container>
      </SafeArea>
   )
}

export default HelpScreen
