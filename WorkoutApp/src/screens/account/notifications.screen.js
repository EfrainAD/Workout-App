import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const NotificationsScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Notifications</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default NotificationsScreen
