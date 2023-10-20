import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const WorkoutInfoScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Workout Info</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default WorkoutInfoScreen
