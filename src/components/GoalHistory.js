import React, { Component } from 'react';
import RNFS from 'react-native-fs';
import { Text, ListView, Dimensions, ScrollView } from 'react-native';
import { Card, CardSection } from './common';
import { CurrentConsumption } from './CurrentConsumption';
import UserData from './data/userData.json';

class GoalHistory extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(UserData.goals)
    };

    RNFS.readFile(`${RNFS.DocumentDirectoryPath}/userdata.json`, 'utf8')
      .then((file) => {
        this.setState({ dataSource: ds.cloneWithRows(JSON.parse(file).goals) });
      }) 
      .catch((err) => {
        console.log(err.message);
      }
    );
  }

  render() {
    const { cardStyle, textStyle, textSectionStyle, goalsSectionStyle, numberStyle, goalStyle, goalTextStyle } = styles;
    console.log(this.state.dataSource);
    return (
      <Card style={cardStyle}>
        <CurrentConsumption />

        <CardSection style={textSectionStyle}>
          <Text style={textStyle}> OLD GOALS </Text>
        </CardSection>

        <CardSection style={goalsSectionStyle}>
          <ScrollView>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(data) => {
                return (
                  <CardSection style={goalStyle}>
                    <Text style={goalTextStyle}>{data.targetTimespawn.toUpperCase()} GOAL</Text>
                    <Text style={numberStyle}>
                      7 {data.targetUnit} / {data.targetValue} {data.targetUnit}
                    </Text>
                  </CardSection>
                );
              }}
            />
          </ScrollView>
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
  textSectionStyle: {
    marginTop: 40,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    width: Dimensions.get('window').width,
    fontWeight: 'bold',
    color: '#3d3d3d'
  },
  goalsSectionStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 5,
    borderColor: '#ddd',
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goalStyle: {
    height: 90,
    width: 200,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(67, 110, 178, 1)',
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

export default GoalHistory;
