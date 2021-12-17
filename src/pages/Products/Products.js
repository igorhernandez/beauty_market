import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Banner, ListProducts} from '@components';
import {styles} from './Products.style';

const Products = ({route}) => {
  const {
    params: {item},
  } = route;

  return (
    <SafeAreaView style={styles.container}>
      <Banner item={item} />
      <Text style={styles.sectionTitle}>Kérastase | Seleção Especial</Text>
      <View style={styles.container}>
        <ListProducts />
      </View>
    </SafeAreaView>
  );
};

export default Products;
