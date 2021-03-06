import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, ProductContent, ProductPrices} from '@components';
import {styles} from './Product.style';

const Product = ({product}) => {
  const {
    img,
    line,
    productName,
    oldPrice,
    newPrice,
    transport,
    plots,
    newProduct,
    discount,
  } = product;

  const shouldRenderNewProductAlert = () =>
    newProduct && (
      <View style={styles.newProductAlert}>
        <Text style={styles.newProductText}>Lançamento</Text>
      </View>
    );

  const productContentProps = {
    line,
    productName,
  };

  const productPricesProps = {
    oldPrice,
    newPrice,
    transport,
    plots,
  };

  return (
    <>
      <View style={styles.productBox}>
        <View style={styles.discountBox}>
          <Text style={styles.discountNumber}>{discount}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.productImage}
            resizeMode="contain"
            source={{
              uri: img,
            }}
          />
        </View>
        {shouldRenderNewProductAlert()}
        <ProductContent {...productContentProps} />
        <ProductPrices {...productPricesProps} />
        <Button text="Ver Mais" />
      </View>
    </>
  );
};

export default Product;
