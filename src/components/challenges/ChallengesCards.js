import { Text, View } from 'react-native'
import { theme } from '../../infrastructure/theme'
import ProgressBar from '../card/ProgressBar'
import SectionHeader from '../screen/SectionHeader';

const WorkoutCard = ({ title, workoutName, description }) => {
  return (
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
          {title}
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
          {workoutName}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}>
          {description}
        </Text>
      </View>
      <ProgressBar />

    </View>
  );
};

const ChallengesCards = (props) => {
  const title = props.title
  const workoutData = [
    { title: '30 day Streak', workoutName: 'Workout 1', description: 'Description 1' },
    { title: '60 day Streak', workoutName: 'Workout 2', description: 'Description 2' },
    // Add more workout data as needed
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

export default ChallengesCards