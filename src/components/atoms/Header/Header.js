import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Header.style';

const Header = () => {
  const logo = '../../../assets/images/logo/primaryLogo.png';
  return (
    <View style={styles.containerLogo}>
      <Image resizeMode="contain" source={require(logo)} style={styles.logo} />
    </View>
  );
};

export default Header;
