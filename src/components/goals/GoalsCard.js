import { Text, View } from 'react-native'
import { theme } from '../../infrastructure/theme'
import ProgressBar from '../card/ProgressBar'
import SectionHeader from '../screen/SectionHeader'

const GoalsCard = (props) => {
    const title = props.title
    
    return (
        <View>
            <SectionHeader title={title} />
            <View
                style={{
                    backgroundColor: theme.colors.background.neutral[2],
                    margin: 6,
                    marginLeft: 6,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.colors.borders.neutral,
                    padding: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                }}
            >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text
                    style={{
                        color: theme.colors.text.neutral,
                        fontSize: 16,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                    }}
                >
                    Goal: Name
                </Text>
                <Text
                    style={{
                        color: theme.colors.text.neutral,
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                    }}
                >
                    220 lbs
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                >
                    Description of 40 characters
                </Text>
            </View>
            <ProgressBar />
            </View>
        </View>
    )
}

export default GoalsCard