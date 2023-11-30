import styled from 'styled-components/native';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../infrastructure/theme';

export const ProgressBarContainer = styled(View)`
  padding-top: 10px;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  border-radius: 10px;
  height: 25px;
  width: 243px;
  border-width: 2px;
  border-color: ${theme.colors.borders.neutral};
`;

export const IconButtonContainer = styled(View)`
  padding: 1px;
  border-width: 1px;
  border-color: ${theme.colors.borders.neutral};
  border-radius: 100px;
  background-color: ${theme.colors.background.neutral[2]};
`;

export const AddRemoveIconButtonContainer = styled(IconButtonContainer)`
  background-color: ${theme.colors.background.neutral[0]};
`;

export const StyledIonicons = styled(Ionicons)`
  font-size: 25px;
  color: ${theme.colors.text.neutral};
`;
