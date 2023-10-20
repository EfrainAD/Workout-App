import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const AddChallengeScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Add Challenge Form</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default AddChallengeScreen
