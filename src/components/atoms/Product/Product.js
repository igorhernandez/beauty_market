import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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
    newProduct ? (
      <View style={styles.newProductAlert}>
        <Text style={styles.newProductText}>Lançamento</Text>
      </View>
    ) : (
      <></>
    );
  return (
    <>
      <View style={styles.productBox}>
        <View style={styles.imageContainer}>
          <View style={styles.discountBox}>
            <Text style={styles.discountNumber}>{discount}</Text>
          </View>
          <Image
            style={styles.productImage}
            resizeMode="contain"
            source={{
              uri: img,
            }}
          />
        </View>
        {shouldRenderNewProductAlert()}
        <View style={styles.productContent}>
          <Text style={styles.productLineText}>{line}</Text>
          <Text>{productName}</Text>
        </View>
        <View style={styles.productPrices}>
          <Text style={styles.oldPrice}>{oldPrice}</Text>
          <Text style={[styles.newPrice, styles.strongOrange]}>{newPrice}</Text>
          <Text style={[styles.strongOrange, styles.transportText]}>
            {transport}
          </Text>
          <Text>{plots}</Text>
          <TouchableOpacity>
            <View style={styles.showMoreButton}>
              <Text style={styles.showMoreButtonText}>Ver mais</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Product;
