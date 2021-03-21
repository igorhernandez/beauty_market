import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {screens} from './Routes';
import {RouteNames} from './RouteNames';
import {styles} from './Navigation.style';

export default function MainNavigation() {
  const handleNavigation = (navigation, route) => {
    if (route.name === RouteNames.HOME) {
      return NativeModules.ReactNativeUIManager.dismiss();
    }
    return navigation.goBack();
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={RouteNames.HOME}
        screenOptions={({navigation, route}) => ({
          headerTitleAlign: 'left',
          headerTitle: () => (
            <Text style={styles.headerTitle}>{route.name} </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              hitSlop={{top: 50, bottom: 20, left: 50, right: 50}}
              onPress={() => handleNavigation(navigation, route)}>
              <Text style={styles.backButton}>Voltar</Text>
            </TouchableOpacity>
          ),
        })}>
        {Object.entries({
          ...screens,
        }).map(([objectName, properties]) => {
          const {name, component, options} = properties;
          return (
            <Stack.Screen
              key={objectName}
              name={name}
              component={component}
              options={options || {}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
