import { StackNavigator } from 'react-navigation';
import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import AddGoal from '../AddGoal';
import GoalHistory from '../GoalHistory';

const GoalStack = StackNavigator({
  'Add Goal': {
    screen: AddGoal,
    navigationOptions: {
      headerTitle: 'Add Goal'
    }
  },
  'Goal History': {
    screen: GoalHistory,
    navigationOptions: {
      headerTitle: 'Goal History'
    }
  }
}, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft: <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Goals')} 
    > 
    <Image 
      style={{ width: 50, height: 50 }}
      source={require('../../images/back-button.png')}     
    />
  </TouchableWithoutFeedback>
  })
});

export default GoalStack;

