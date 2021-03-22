import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './ProductPrices.style';

const ProductPrices = ({oldPrice, newPrice, transport, plots}) => {
  return (
    <View style={styles.productPrices}>
      <Text style={styles.oldPrice}>{oldPrice}</Text>
      <Text style={[styles.newPrice, styles.strongOrange]}>{newPrice}</Text>
      <Text style={[styles.strongOrange, styles.transportText]}>
        {transport}
      </Text>
      <Text>{plots}</Text>
    </View>
  );
};

export default ProductPrices;
