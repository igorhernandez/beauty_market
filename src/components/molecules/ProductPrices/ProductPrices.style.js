import {StyleSheet} from 'react-native';
import colors from '@styles/colors';

export const styles = StyleSheet.create({
  productPrices: {
    marginTop: 12,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 18,
  },
  strongOrange: {
    fontWeight: 'bold',
    color: colors.neutralColorOrange,
  },
  transportText: {
    fontSize: 14,
  },
});
