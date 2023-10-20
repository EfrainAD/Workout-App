import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const SecurityScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Security & Privacy</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default SecurityScreen
