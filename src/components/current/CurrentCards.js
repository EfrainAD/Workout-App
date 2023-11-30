import { Text, View } from 'react-native'
import { theme } from '../../infrastructure/theme'
import { MaterialIcons } from '@expo/vector-icons'
import SectionHeader from '../screen/SectionHeader';

const WorkoutCard = ({ title, difficulty, duration, days }) => {
  return (
      <View
          style={{
            backgroundColor:theme.colors.background.neutral[2],
            margin: 10,
            marginLeft: 6,
            borderWidth: 1,
            borderColor: theme.colors.borders.neutral,
            borderRadius: 20,
            padding: 10,
            paddingLeft: 20,
            marginBottom: 5,
          }}
      >
          <View style={{ paddingBottom: 0 }}>
            <Text
                style={{ color: theme.colors.text.neutral, fontSize: 16, fontWeight: 600 }}
            >
                {title}
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
                {difficulty}
            </Text>
            <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
            >
                <Text
                  style={{
                      color: theme.colors.text.neutral,
                      paddingRight: 27,
                      fontSize: 14,
                      fontWeight: 600,
                  }}
                >
                  {duration}
                </Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color= {theme.colors.icon.orange}
                  style={{ alignSelf: 'center' }}
                />
            </View>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text
                style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
            >
                {days}
            </Text>
          </View>
      </View>
  );
};

const CurrentCards = (props) => {
    const title = props.title
    const workoutData = [
      { title: 'The Ultimate upperbody', difficulty: 'begginer', duration: '15m 45sec', days: "MON, WED, FRI"},
      { title: 'The Ultimate upperbody', difficulty: 'expert', duration: '15m 45sec', days: "MON, WED, THR" },
    ];

    return (
      <View>
          <SectionHeader title={title}/>
            {workoutData.map((workout, index) => (
              <WorkoutCard key={index} {...workout} />
            ))}
        </View>
    )
}

export default CurrentCards