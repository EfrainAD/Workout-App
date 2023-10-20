import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const StatsScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Stats</H1>
         </CenteredView>
      </SafeArea>
   )
}

export default StatsScreen
