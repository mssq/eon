import React, { Component } from 'react';
import RNFS from 'react-native-fs';
import { Text, Image } from 'react-native';
import { Button, Card, CardSection } from './common';
import FileHandling from './filehandling/FileHandling';
import userData from './data/userData';
import { DailyConsumption } from './DailyConsumption';

class HomeScreen extends Component {
  state = { userJsonData: userData };

  componentWillMount() {
    RNFS.readFile(`${RNFS.DocumentDirectoryPath}/userdata.json`, 'utf8')
    .then((file) => {
      this.setState({ userJsonData: JSON.parse(file) });
    })
    .catch((err) => {
      console.log(err.message);
      FileHandling.writeFile(userData);
    });
  }

  goalStatus() {
    const { dailyConsumptionValue, goals, currentGoal } = this.state.userJsonData;
    if (dailyConsumptionValue > goals[currentGoal].targetValue) {
      return false;
    }

    return true;
  }

  render() {
    const { imageStyle, cardStyle, infoStyle, socialStyle, 
      numberStyle, nameStyle, descStyle } = styles;
    const { name, monthlyConsumptionValue, monthlyAverageConsumption, consumptionUnit } = this.state.userJsonData;
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

        
        <DailyConsumption userJsonData={this.state.userJsonData} goalStatus={this.goalStatus()} />

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
    padding: 5,
    marginTop: 40,
    justifyContent: 'flex-start',
    flexDirection: 'row',
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
