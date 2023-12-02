import React from 'react';
import { View } from 'react-native';
import { StyledView, TitleText, InfoContainer, DifficultyText, DurationContainer, DurationText, ArrowIcon, DaysText } from './WorkoutCard.styles';
// import { StyledView } from './WorkoutCard.styles';
import SectionHeader from '../screen/SectionHeader';
import { theme } from '../../infrastructure/theme';

const WorkoutCard = ({ title, difficulty, duration, days }) => {
  return (
    <StyledView>
      <TitleText>{title}</TitleText>
      <InfoContainer>
        <DifficultyText>{difficulty}</DifficultyText>
        <DurationContainer>
          <DurationText>{duration}</DurationText>
          <ArrowIcon name="arrow-forward-ios" size={24} color={theme.colors.icon.orange} />
        </DurationContainer>
      </InfoContainer>
      <DaysText>{days}</DaysText>
    </StyledView>
  );
};

const WorkoutList = (props) => {
  const title = props.title;
  const workoutData = [
    { title: 'The Ultimate upperbody', difficulty: 'begginer', duration: '15m 45sec', days: 'MON, WED, FRI' },
    { title: 'The Ultimate upperbody', difficulty: 'expert', duration: '15m 45sec', days: 'MON, WED, THR' },
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

export default WorkoutList;
