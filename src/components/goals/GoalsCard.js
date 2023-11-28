import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../infrastructure/theme'
import { LinearGradient } from 'expo-linear-gradient'

const GoalsCard = (props) => {
    return (
        <View>
        {/* Goal Cards */}
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
            <View
                style={{
                    paddingTop: 10,
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <LinearGradient
                    colors={[
                        theme.colors.progress.start,
                        theme.colors.progress.middle,
                        theme.colors.progress.end,
                    ]}
                    locations={[0, 0.5104, 0.9531]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={{
                        borderRadius: 10,
                        height: 25,
                        width: 243,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                    }}
                ></LinearGradient>
                <View>
                    <Text
                        style={{
                        color: theme.colors.text.neutral,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.background.neutral[0],
                        textAlign: 'center',
                        padding: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        fontSize: 14,
                        fontWeight: 600,
                        }}
                    >
                        0
                    </Text>
                </View>
                <View
                    style={{
                        padding: 1,
                        borderWidth: 1,
                        borderColor: theme.colors.borders.neutral,
                        borderRadius: 100,
                        backgroundColor: theme.colors.background.neutral[0],
                    }}
                >
                    <Ionicons name="add" size={25} color={theme.colors.text.neutral} />
                </View>
            </View>
            </View>
        </View>
    )
}

export default GoalsCard