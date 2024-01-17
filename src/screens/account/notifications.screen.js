import { Container } from '../../infrastructure/styledComponents/styledComonents'
import { SafeArea } from '../../components/utilities/safeArea.component'
import SectionHeader from '../../components/screen/SectionHeader'
import { StyledView, TitleText } from '../../components/currentWorkouts/WorkoutCard.styles'
import { RowView } from '../../components/settings/Settings.Screen.styles'

const NotificationsScreen = () => {
   return (
      <SafeArea>
         <Container>
            <SectionHeader title="Pause" />
            <StyledView>
               <RowView>
                  <TitleText>Duration</TitleText>
                  <TitleText>00mm:00ss</TitleText>
               </RowView>
            </StyledView>
            <SectionHeader title="Workout Schedule" />
            <StyledView>
               <RowView>
                  <TitleText>Notify at</TitleText>
                  <TitleText>00mm:00ss</TitleText>
               </RowView>
            </StyledView>
         </Container>
      </SafeArea>
   )
}

export default NotificationsScreen
