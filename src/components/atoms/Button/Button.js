import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Button.style';

const Button = ({text}) => {
  return (
    <TouchableOpacity>
      <View style={styles.showMoreButton}>
        <Text style={styles.showMoreButtonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
