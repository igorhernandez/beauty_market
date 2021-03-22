import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Banner} from '../../components/atoms';
import {Product} from '../../components/particles';
import {productsMocks} from './Products.mock';
import {styles} from './Products.style';

const Products = ({route}) => {
  const {
    params: {item},
  } = route;

  const renderProducts = () =>
    productsMocks.map(product => (
      <Product key={product.id} product={product} />
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Banner item={item} />
        <Text style={styles.sectionTitle}>Kérastase | Seleção Especial</Text>
        <View style={styles.container}>
          <View style={styles.productsContainer}>{renderProducts()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;
