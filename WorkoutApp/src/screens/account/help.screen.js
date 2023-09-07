import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const HelpScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Help</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default HelpScreen
