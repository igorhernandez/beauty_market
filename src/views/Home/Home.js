import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Banner from '../../components/atoms/Banner/Banner';
import {styles} from './Home.style';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsLength, setItemsLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const limitPerPage = 8;

  const logo =
    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:eco/v1/blz/assets-store/0.0.285/images/store/1/logo_2x.png';

  const getProducts = () => {
    console.log('entrei');
    if (itemsLength !== products.length || products.length === 0) {
      setLoading(true);
      const baseUrl = 'http://localhost:3000';
      const url = `${baseUrl}/products?page=${page}&limit=${limitPerPage}`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setItemsLength(res.productsLength);
          setLoading(false);
          setProducts(prevProducts => [...prevProducts, ...res.products]);
        });
    }
  };

  const shouldRenderLoader = () =>
    loading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <></>
    );

  useEffect(() => {
    getProducts();
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image resizeMode="contain" source={{uri: logo}} style={styles.logo} />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={products}
        renderItem={Banner}
        onEndReached={() => setPage(prevState => prevState + 1)}
        onEndReachedThreshold={0.01}
        ListFooterComponent={shouldRenderLoader}
      />
    </SafeAreaView>
  );
};

export default Home;
