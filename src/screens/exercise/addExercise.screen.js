import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const AddExerciseScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Add Exercise Form</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default AddExerciseScreen
