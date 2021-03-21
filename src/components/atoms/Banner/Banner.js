import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Navigate} from '../../../navigation/RootNavigation';
import {RouteNames} from '../../../navigation/RouteNames';
import {styles} from './Banner.style';

const Banner = ({item}) => {
  const handleRedirectToProducts = () => {
    Navigate(RouteNames.PRODUCTS, {
      item,
    });
  };

  return (
    <TouchableOpacity onPress={handleRedirectToProducts}>
      <View style={styles.containerBanner}>
        <Image
          resizeMode="cover"
          source={{uri: item.src}}
          style={styles.banner}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Banner;
