import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, TouchableWithoutFeedback } from 'react-native';

import DrawerStack from './DrawerStack';


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    title: 'Navigation',
    headerLeft: <TouchableWithoutFeedback
      onPress={() => {
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen');
        } else {
          navigation.navigate('DrawerClose');
        }
      }}
    > 
    <Image 
      style={{ width: 40, height: 40, marginLeft: 5 }}
      source={require('../../images/if_menu-alt_134216.png')}     
    />
    </TouchableWithoutFeedback>
  })
});

export default DrawerNavigation;
