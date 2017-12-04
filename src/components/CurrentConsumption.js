import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import UserData from './data/userData';

let { dailyConsumptionValue, monthlyConsumptionValue, consumptionUnit, goals, currentGoal } = UserData;
let goalStyle = {
  height: 90,
  width: 200,
  marginTop: 40,
  justifyContent: 'center',
  backgroundColor: 'rgba(33, 175, 64, 1)',
  borderRadius: 12
};

const CurrentConsumption = ({ userJsonData, goalStatus }) => {
  const { numberStyle, goalTextStyle } = styles;
  if (userJsonData !== undefined) {
    dailyConsumptionValue = userJsonData.dailyConsumptionValue;
    monthlyConsumptionValue = userJsonData.monthlyConsumptionValue;
    consumptionUnit = userJsonData.consumptionUnit;
    goals = userJsonData.goals;
    currentGoal = userJsonData.currentGoal;
  }

  let currentValue = 0;
  
  if (goals[currentGoal].targetTimespawn === 'Daily') {
    currentValue = dailyConsumptionValue;
  } else {
    currentValue = monthlyConsumptionValue;
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
      <Text style={goalTextStyle}>{goals[currentGoal].targetTimespawn.toUpperCase()} GOAL</Text>
      <Text style={numberStyle}>
        {currentValue} {consumptionUnit} / {goals[currentGoal].targetValue} {goals[currentGoal].targetUnit}
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

export { CurrentConsumption };
