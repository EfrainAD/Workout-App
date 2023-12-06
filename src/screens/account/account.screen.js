import { SafeArea } from '../../components/utilities/safeArea.component'
import { View, ScrollView } from 'react-native'
import List from '../../components/accounts/List'
import { theme } from '../../infrastructure/theme'
import Header from '../../components/section/Header'
// import {
//    CenteredView,
//    H1,
// } from '../../infrastructure/styledComponents/styledComonents'

const AccountScreen = () => {
   return (
      <SafeArea>
         <View style={{ flex: 1, backgroundColor: theme.colors.background.neutral[0] }}>
            <Header title="Account"/>
            <ScrollView>
            <List/>
            </ScrollView>
         </View>
      </SafeArea>
   )
}

export default AccountScreen
