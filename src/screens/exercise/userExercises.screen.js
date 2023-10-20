import { View } from 'react-native'
import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   Body,
   CenteredView,
   H1,
} from '../../infrastructure/styledComponents/styledComonents'

const UserExercisesScreen = () => {
   return (
      <SafeArea>
         <CenteredView>
            <H1>Exercises</H1>
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

export default UserExercisesScreen
