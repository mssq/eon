import { StackNavigator } from 'react-navigation';

import LoginStack from './LoginStack';
import DrawerNav from './DrawerNav';
import GoalStack from './GoalStack';

export const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNav },
  goalStack: { screen: GoalStack }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
});
