import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import LoginForm from '../LoginForm';

const LoginStack = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: <Image 
        style={{ width: 160, height: 50, alignSelf: 'center' }}
        source={require('../../images/EON_Logo.png')} 
      />
    }
  }
}, {
  headerMode: 'float'
});

export default LoginStack;
