import {StyleSheet} from 'react-native';
import colors from '@styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutralColorWhite,
    paddingHorizontal: 10,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 15,
  },
  productsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
