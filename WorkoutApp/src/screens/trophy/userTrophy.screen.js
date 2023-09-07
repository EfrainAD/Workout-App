import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const ChategoryScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>User Category</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default ChategoryScreen
