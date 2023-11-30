import React from 'react';
import { StyledView, RowView, GoalText, WeightText, DescriptionText, ProgressBarView } from './GoalsCard.styles';
import { View } from 'react-native';
import ProgressBar from '../card/ProgressBar';
import SectionHeader from '../screen/SectionHeader';

const GoalsCard = (props) => {
  const title = props.title;

  return (
    <View>
      <SectionHeader title={title} />
      <StyledView>
        <RowView>
          <GoalText>Goal: Name</GoalText>
          <WeightText>220 lbs</WeightText>
        </RowView>
        <RowView>
          <DescriptionText>Description of 40 characters</DescriptionText>
        </RowView>
        <ProgressBarView>
          <ProgressBar />
        </ProgressBarView>
      </StyledView>
    </View>
  );
};

export default GoalsCard;
