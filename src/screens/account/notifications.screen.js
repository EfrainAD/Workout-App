import { View } from 'react-native'
import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   ArrowIcon,
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'
import WorkoutList from '../../components/currentWorkouts/WorkoutList'
import { theme } from '../../infrastructure/theme'
import SectionHeader from '../../components/screen/SectionHeader'
import { StyledView, TitleText } from '../../components/currentWorkouts/WorkoutCard.styles'
import { RowView } from '../../components/settings/Settings.Screen.styles'

const NotificationsScreen = () => {
   return (
      <SafeArea>
               <View
         style={{
            flex: 1,
            backgroundColor: theme.colors.background.neutral[0],
         }}
      >
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
         </View>
      </SafeArea>
   )
}

export default NotificationsScreen
