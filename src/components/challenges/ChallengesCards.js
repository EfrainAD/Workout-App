import React from 'react';
import { View } from 'react-native';
import { StyledView, RowView, TitleText, WorkoutNameText, DescriptionText, ProgressBarView } from './challengesCards.styles';
import ProgressBar from '../card/ProgressBar';
import SectionHeader from '../screen/SectionHeader';

const WorkoutCard = ({ title, workoutName, description }) => {
  return (
    <StyledView>
      <RowView>
        <TitleText>{title}</TitleText>
        <WorkoutNameText>{workoutName}</WorkoutNameText>
      </RowView>
      <RowView>
        <DescriptionText>{description}</DescriptionText>
      </RowView>
      <ProgressBarView>
        <ProgressBar />
      </ProgressBarView>
    </StyledView>
  );
};

const ChallengesCards = (props) => {
  const title = props.title;
  const workoutData = [
    { title: '30 day Streak', workoutName: 'Workout 1', description: 'Description 1' },
    { title: '60 day Streak', workoutName: 'Workout 2', description: 'Description 2' },
  ];

  return (
    <View>
      <SectionHeader title={title} />
      {workoutData.map((workout, index) => (
        <WorkoutCard key={index} {...workout} />
      ))}
    </View>
  );
};

export default ChallengesCards;
