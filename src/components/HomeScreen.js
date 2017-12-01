import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Button, Card, CardSection } from './common';
import userData from './data/userData.json';

class HomeScreen extends Component {

  render() {
    const { imageStyle, cardStyle, infoStyle, goalStyle, socialStyle, 
      numberStyle, nameStyle, descStyle, goalTextStyle } = styles;
    const { name, dailyConsumptionValue, monthlyConsumptionValue, 
      monthlyAverageConsumption, consumptionUnit, goals, currentGoal } = userData;

    return (
      <Card style={cardStyle}>
        <CardSection style={infoStyle}>
          <Image 
            style={imageStyle}
            source={require('../images/dummy-profile-pic.png')}     
          />
          <Text style={nameStyle}>{name}</Text>
          <Text style={numberStyle}>
            {monthlyConsumptionValue} {consumptionUnit} / {monthlyAverageConsumption} {consumptionUnit}
          </Text>
          <Text style={descStyle}>current / month avg</Text>
        </CardSection>

        <CardSection style={goalStyle}>
          <Text style={goalTextStyle}>DAILY GOAL</Text>
          <Text style={numberStyle}>
            {dailyConsumptionValue} {consumptionUnit} / {goals[currentGoal].targetValue} {goals[currentGoal].targetUnit}
          </Text>
        </CardSection>

        <CardSection style={socialStyle}>
          <Button>Social</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  cardStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoStyle: {
    marginTop: 30,
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 12
  },
  goalStyle: {
    height: 90,
    width: 200,
    justifyContent: 'center',
    backgroundColor: 'rgba(70, 130, 180, 1)',
    borderRadius: 12
  },
  socialStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  imageStyle: {
    width: 120,
    height: 120,
    marginBottom: 15
  },
  numberStyle: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 0
  },
  nameStyle: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10
  },
  descStyle: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
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

export default HomeScreen;
