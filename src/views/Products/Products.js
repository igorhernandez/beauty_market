import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Banner, Product} from '../../components/atoms';
import {productsMocks} from './Products.mock';
import {styles} from './Products.style';

const Products = ({route}) => {
  const {
    params: {item},
  } = route;

  const renderProducts = () =>
    productsMocks.map((product, index) => (
      <Product key={index} product={product} />
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
