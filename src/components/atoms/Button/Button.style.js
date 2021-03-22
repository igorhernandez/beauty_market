import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  showMoreButton: {
    backgroundColor: colors.neutralColorOrange,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  showMoreButtonText: {
    color: colors.neutralColorWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
