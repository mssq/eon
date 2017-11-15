import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginForm from '../LoginForm';
import HomeScreen from '../HomeScreen';

export const StackFeed = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: <Image 
        style={{ width: 160, height: 50, alignSelf: 'center' }}
        source={require('../../images/EON_Logo.png')} 
      />
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
      headerLeft: null
    }
  }
});
