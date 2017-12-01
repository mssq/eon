import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Button, Card, CardSection } from './common';
import userData from './data/userData.json';
import  { DailyConsumption } from './DailyConsumption';

class HomeScreen extends Component {

  render() {
    const { imageStyle, cardStyle, infoStyle, socialStyle, 
      numberStyle, nameStyle, descStyle } = styles;
    const { name, monthlyConsumptionValue, monthlyAverageConsumption, consumptionUnit } = userData;

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

        <DailyConsumption />

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
  }
};

export default HomeScreen;
