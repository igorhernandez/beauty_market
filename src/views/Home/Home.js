import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import {apiUrl} from '../../api/apiConfig';
import {Header, Banner} from '../../components/atoms';
import {styles} from './Home.style';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const limitPerPage = 8;

  const getProducts = () => {
    if (isLastPage) {
      return null;
    }
    setLoading(true);
    const url = `${apiUrl}/products?page=${page}&limit=${limitPerPage}`;
    fetch(url)
      .then(res => res.json())
      .then(response => {
        const {lastPage, products: newProducts} = response;
        console.log({response});
        setLoading(false);
        setIsLastPage(lastPage);
        setProducts(prevProducts => [...prevProducts, ...newProducts]);
      })
      .catch(error => {
        setLoading(false);
      });
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
      <Header />
      <FlatList
        keyExtractor={item => item.id}
        onEndReached={() => setPage(prevPage => prevPage + 1)}
        onEndReachedThreshold={0}
        data={products}
        ListFooterComponent={shouldRenderLoader}
        renderItem={Banner}
      />
    </SafeAreaView>
  );
};

export default Home;
