import { View } from 'react-native'
import {
   Body,
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'
import { SafeArea } from '../../components/utilities/safeArea.component'

const UserWorkoutsScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Workouts</H1>
            <View style={{ padding: 50, paddingTop: 10 }}>
               <Body>
                  This simply shows all the ones user has, this not the one you
                  get to in the dashboard.
               </Body>
            </View>
         </CenteredView>
      </SafeArea>
   )
}

export default UserWorkoutsScreen
