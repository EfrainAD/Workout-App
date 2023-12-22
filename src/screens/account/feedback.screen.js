import { Text, TextInput, View } from 'react-native'
import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   CenteredView,
   H1,
   StyledView,
} from '../../infrastructure/styledComponents/styledComonents'
import { theme } from '../../infrastructure/theme'

const FeedbackScreen = () => {
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: theme.colors.background.neutral[0],
            color: 'white'
         }}
      >
          <Text          
            style={{ 
               color: "#FFF",
               fontSize: 20,
               fontStyle: "normal",
               fontWeight: 600,
               margin: 24,
               height: "normal"}}
         >Send a Message</Text>
<View style={{
  borderColor: "#A5A5A5",
  borderWidth: 1,
  borderRadius: 20, // Optional: You can add border radius for rounded corners
  padding: 12,
  margin: 12,
}}>
  <TextInput
    placeholder="Add a Way to contact you here"
    placeholderTextColor="#A5A5A5"
    style={{ 
      color: "#A5A5A5",
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 600,
    }}
  />
</View>

          <TextInput
            style={{ 
               color: "#A5A5A5",
               fontSize: 18,
               fontStyle: "normal",
               fontWeight: 600,
               margin: 31,
               height: "normal"}}
          >Add your message here</TextInput>

      </View>
   )
}

export default FeedbackScreen
