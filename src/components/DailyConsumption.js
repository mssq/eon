import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import userData from './data/userData.json';

const DailyConsumption = ({ style }) => {
  const { goalStyle, numberStyle, goalTextStyle } = styles;
  const { dailyConsumptionValue, consumptionUnit, goals, currentGoal } = userData;

  return (
    <CardSection style={style || goalStyle}>
      <Text style={goalTextStyle}>DAILY GOAL</Text>
      <Text style={numberStyle}>
        {dailyConsumptionValue} {consumptionUnit} / {goals[currentGoal].targetValue} {goals[currentGoal].targetUnit}
      </Text>
    </CardSection>
  );
};

const styles = {
  goalStyle: {
    height: 90,
    width: 200,
    justifyContent: 'center',
    backgroundColor: 'rgba(70, 130, 180, 1)',
    borderRadius: 12
  },
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
