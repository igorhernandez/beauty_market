import {Dimensions, StyleSheet} from 'react-native';
import colors from '@styles/colors';

const windowWidth = Dimensions.get('window').width / 2;

export const styles = StyleSheet.create({
  productBox: {
    borderWidth: 1,
    borderColor: colors.neutralColorLightestGrey,
    width: windowWidth - 15,
    padding: 5,
    marginLeft: 5,
    justifyContent: 'space-between',
    flexGrow: 1,
    marginBottom: 20,
  },
  discountBox: {
    backgroundColor: colors.neutralColorOrange,
    borderRadius: 5,
    alignSelf: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  discountNumber: {
    color: colors.neutralColorWhite,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productImage: {
    height: 200,
    width: '100%',
  },
  newProductAlert: {
    padding: 5,
    borderColor: colors.neutralColorPurple,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  newProductText: {
    color: colors.neutralColorPurple,
    fontWeight: 'bold',
  },
});
