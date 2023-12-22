import { View, ScrollView } from 'react-native'
import List from '../../components/accounts/List'
import { theme } from '../../infrastructure/theme'

const AccountScreen = ({navigation}) => {
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: theme.colors.background.neutral[0],
         }}
      >
         <ScrollView>
            <List navigation={navigation}/>
         </ScrollView>
      </View>
   )
}

export default AccountScreen
