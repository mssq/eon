import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import TestScreen from '../TestScreen';

const DrawerStack = DrawerNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Test: {
    screen: TestScreen,
    navigationOptions: {
      headerTitle: 'Test'
    }
  },
  
});

export default DrawerStack;
