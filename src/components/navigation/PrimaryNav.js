import { StackNavigator } from 'react-navigation';

import LoginStack from './LoginStack';
import DrawerNav from './DrawerNav';

export const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNav }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
});
