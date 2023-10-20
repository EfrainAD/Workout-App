import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const AddWorkoutScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Add Workout Form</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default AddWorkoutScreen
