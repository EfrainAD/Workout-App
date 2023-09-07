import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const AddGoalScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Add Goal Form</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default AddGoalScreen
