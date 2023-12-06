import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { theme } from '../../infrastructure/theme';
import { MaterialIcons } from '@expo/vector-icons';

export const StyledView = styled(View)`
  background-color: ${theme.colors.background.neutral[2]};
  margin: 5px;
  margin-left: 8px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${theme.colors.borders.neutral};
  padding: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const RowView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const SectionView = styled(View)`
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const TitleText = styled(Text)`
  color: ${theme.colors.text.neutral};
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const ArrowIcon = styled(MaterialIcons)`
  align-self: center;
`;