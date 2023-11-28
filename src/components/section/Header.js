import { Text, View, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../infrastructure/theme'

const Header = (props) => {
   return (
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               paddingLeft: 17,
               paddingTop: 5,
               paddingBottom: 20,
               paddingRight: 17,
            }}
         >
            <Ionicons
               style={{ color: theme.colors.icon.neutral, fontWeight: 600 }}
               name="ios-arrow-back"
               size={24}
            />
            <Text style={{ color: theme.colors.text.neutral, fontSize: 24, fontWeight: 600 }}>
               {props.title}
            </Text>
            <Ionicons
               style={{ color: theme.colors.icon.neutral }}
               name="settings-outline"
               size={24}
            />
         </View>)

}

export default Header
