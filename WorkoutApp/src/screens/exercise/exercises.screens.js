import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const ExercisesScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Workouts</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default ExercisesScreen
