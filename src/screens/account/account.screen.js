import { ScrollView } from 'react-native'
import List from '../../components/accounts/List'
import { Container } from '../../infrastructure/styledComponents/styledComonents'

const AccountScreen = ({navigation}) => {
   return (
      <Container>
         <ScrollView>
            <List navigation={navigation}/>
         </ScrollView>
      </Container>
   )
}

export default AccountScreen
