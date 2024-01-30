import { SafeArea } from '../../components/utilities/safeArea.component'
import {Container} from '../../infrastructure/styledComponents/styledComonents'
import ButtonItem from '../../components/screen/button/ButtonItem'

const ExercisesScreen = ({ navigation }) => {
   return (
      <SafeArea>
         <Container>
            <ButtonItem title="Crunches" navigation={navigation} />
         </Container>
      </SafeArea>
   )
}

export default ExercisesScreen
