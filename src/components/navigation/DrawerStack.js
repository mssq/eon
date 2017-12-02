import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import UsageList from '../UsageList';
import Goals from '../Goals';

const DrawerStack = DrawerNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Goals: {
    screen: Goals,
    navigationOptions: {
      headerTitle: 'Goals'
    }
  },
  'Usage Tips': {
    screen: UsageList,
    navigationOptions: {
      headerTitle: 'Usage Tips'
    }
  },
  
});

export default DrawerStack;
