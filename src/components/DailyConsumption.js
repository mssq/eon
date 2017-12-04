import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import UserData from './data/userData';

let { dailyConsumptionValue, consumptionUnit, goals, currentGoal } = UserData;
let goalStyle = {
  height: 90,
  width: 200,
  marginTop: 40,
  justifyContent: 'center',
  backgroundColor: 'rgba(33, 175, 64, 1)',
  borderRadius: 12
};

const DailyConsumption = ({ userJsonData, goalStatus }) => {
  const { numberStyle, goalTextStyle } = styles;
  if (userJsonData !== undefined) {
    dailyConsumptionValue = userJsonData.dailyConsumptionValue;
    consumptionUnit = userJsonData.consumptionUnit;
    goals = userJsonData.goals;
    currentGoal = userJsonData.currentGoal;
  }

  if (!goalStatus && goalStatus !== undefined) {
    goalStyle = {
      height: 90,
      width: 200,
      marginTop: 40,
      justifyContent: 'center',
      backgroundColor: 'rgba(175, 33, 33, 1)',
      borderRadius: 12
    };
  } else if (goalStatus && goalStatus !== undefined) {
    goalStyle = {
      height: 90,
      width: 200,
      marginTop: 40,
      justifyContent: 'center',
      backgroundColor: 'rgba(33, 175, 64, 1)',
      borderRadius: 12
    };
  }

  return (
    <CardSection style={goalStyle}>
      <Text style={goalTextStyle}>DAILY GOAL</Text>
      <Text style={numberStyle}>
        {dailyConsumptionValue} {consumptionUnit} / {goals[currentGoal].targetValue} {goals[currentGoal].targetUnit}
      </Text>
    </CardSection>
  );
};

const styles = {
  numberStyle: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 0
  },
  goalTextStyle: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  }
};

export { DailyConsumption };
