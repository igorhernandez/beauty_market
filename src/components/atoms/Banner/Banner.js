import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './Banner.style';

const Banner = ({item}) => (
  <View style={styles.containerBanner}>
    <Image resizeMode="cover" source={{uri: item.src}} style={styles.banner} />
  </View>
);

export default Banner;
