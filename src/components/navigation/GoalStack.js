import { StackNavigator } from 'react-navigation';
import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import AddGoal from '../AddGoal';

const GoalStack = StackNavigator({
  'Add Goal': {
    screen: AddGoal
  }
}, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    title: 'Add Goal',
    headerLeft: <TouchableWithoutFeedback
      onPress={() => navigation.goBack(null)} 
    > 
    <Image 
      style={{ width: 50, height: 50 }}
      source={require('../../images/back-button.png')}     
    />
  </TouchableWithoutFeedback>
  })
});

export default GoalStack;

