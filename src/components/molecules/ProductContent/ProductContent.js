import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './ProductContent.style';

const ProductContent = ({line, productName}) => {
  return (
    <View style={styles.productContent}>
      <Text style={styles.productLineText}>{line}</Text>
      <Text>{productName}</Text>
    </View>
  );
};

export default ProductContent;
