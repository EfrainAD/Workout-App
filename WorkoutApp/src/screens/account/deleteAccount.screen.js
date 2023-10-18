import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const DeleteAccountScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Delete Account</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default DeleteAccountScreen
