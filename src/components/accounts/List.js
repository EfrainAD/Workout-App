import React from 'react';
import { View } from 'react-native';
// import { StyledView, RowView, TitleText, ArrowIcon, SectionView} from './ListCards.styles';
import { StyledView, RowView, TitleText, ArrowIcon, SectionView} from '../../infrastructure/styledComponents/styledComonents';
import { theme } from '../../infrastructure/theme';


const ButtonCard = ({ title }) => {
  return (
    <StyledView>
      <RowView>
        <TitleText>{title}</TitleText>
        <ArrowIcon name="arrow-forward-ios" size={24} color={theme.colors.icon.orange} />
      </RowView>
    </StyledView>
  );
};

const List = (props) => {
  // const title = props.title;
  const exerciseButtons = [
    { title: 'Edit Exercises'},
    { title: 'Edit Categories'},
    { title: 'Edit Workouts'},
    { title: 'Workout History Log'},
    { title: 'Weight (lb / kg)'},
    { title: 'Set a Goal'},
    { title: 'Set a Challenge'},
    { title: 'Edit Categories'},
    { title: 'Edit Categories'},
    { title: 'Edit Categories'},
  ];
  const profileButtons = [
    { title: 'My Profile'},
    { title: 'My Trophies'},
  ];
  const notificationButtons = [
    { title: 'Notifications'},
    { title: 'Security and Privacy'},
    { title: 'Delete Account'},
  ];
  const helpSupportButtons = [
    { title: 'Help and Support'},
    { title: 'Send Feedback'},
  ];

  return (
    <View>
      <SectionView>
        {exerciseButtons.map((button, index) => (
          <ButtonCard key={index} {...button} />
        ))}
      </SectionView>
      <SectionView>
        {profileButtons.map((button, index) => (
          <ButtonCard key={index} {...button} />
        ))}
      </SectionView>
      <SectionView>
        {notificationButtons.map((button, index) => (
          <ButtonCard key={index} {...button} />
        ))}
      </SectionView>
      <SectionView>
        {helpSupportButtons.map((button, index) => (
          <ButtonCard key={index} {...button} />
        ))}
      </SectionView>
    </View>
  );
};

export default List;
