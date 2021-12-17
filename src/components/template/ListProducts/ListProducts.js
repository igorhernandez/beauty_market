import React from 'react';

import {Product} from '@components';
import {productsMocks} from './ListProducts.mock';
import {FlatList} from 'react-native';

const ListProducts = () => {
  return (
    <FlatList
      numColumns={2}
      data={productsMocks}
      renderItem={({item: product}) => (
        <Product key={product.id} product={product} />
      )}
      keyExtractor={product => product.id}
    />
  );
};

export default ListProducts;
