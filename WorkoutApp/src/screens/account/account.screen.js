import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const AccountScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Account</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default AccountScreen
