import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import LibraryList from '../LibraryList';

const DrawerStack = DrawerNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  'Usage Tips': {
    screen: LibraryList,
    navigationOptions: {
      headerTitle: 'Usage Tips'
    }
  },
  
});

export default DrawerStack;
