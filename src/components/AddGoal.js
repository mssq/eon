import React, { Component } from 'react';
import RNFS from 'react-native-fs';
import { Text, Picker, Dimensions } from 'react-native';
import { CardSection, Card, Button, Input } from './common';
import FileHandling from './filehandling/FileHandling';

class HomeScreen extends Component {
  state = { targetValue: 6, targetUnit: 'kW', targetTimespawn: 'Daily' };

  editFile() {
    RNFS.readFile(`${RNFS.DocumentDirectoryPath}/userdata.json`, 'utf8')
    .then((file) => {
      const dateObj = new Date();
      const year = dateObj.getUTCFullYear();
      const month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      if (day <= 9) {
        day = `0${day}`;
      }
        
      
      const newdate = `${year}-${month}-${day}`;

      const jsonFile = JSON.parse(file);
      const str = `{"id": ${jsonFile.goals.length},
      "targetValue": ${this.state.targetValue}, "targetUnit": "${this.state.targetUnit}",
      "targetTimespawn": "${this.state.targetTimespawn}", "date": "${newdate}"}`;

      jsonFile.goals.push(JSON.parse(str));
      jsonFile.currentGoal = jsonFile.goals.length - 1;
      FileHandling.writeFile(jsonFile);
      console.log(file);
    })
    .then(() => {
      this.props.navigation.navigate('DrawerStack');
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  render() {
    const { cardStyle, buttonStyle, pickerSectionStyle, pickerStyle, pickerTextStyle } = styles;

    return (
      <Card style={cardStyle}>

        <CardSection>
          <Input 
            label="Target value:"
            keyboardType='numeric'
            value={this.state.targetValue.toString()}
            onChangeText={targetValue => this.setState({ targetValue })}
          />
        </CardSection>

        <CardSection style={pickerSectionStyle}>
          <Text style={pickerTextStyle}>Target unit:</Text>
          <Picker
            style={pickerStyle}
            selectedValue={this.state.targetUnit}
            onValueChange={targetUnit => this.setState({ targetUnit })}
          >
            <Picker.Item label="kW" value="kw" />
            <Picker.Item label="W" value="w" />
          </Picker>
        </CardSection>

        <CardSection style={pickerSectionStyle}>
          <Text style={pickerTextStyle}>Target timespawn:</Text>
          <Picker
            style={pickerStyle}
            selectedValue={this.state.targetTimespawn}
            onValueChange={targetTimespawn => this.setState({ targetTimespawn })}
          >
            <Picker.Item label="Daily" value="daily" />
            <Picker.Item label="Monthly" value="monthly" />
          </Picker>
        </CardSection>

        <CardSection style={buttonStyle}>
          <Button
            onPress={() => this.editFile()}
          >SET GOAL</Button>
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
  buttonStyle: {
    padding: 5,
    marginBottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  pickerSectionStyle: {
    width: Dimensions.get('window').width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  pickerStyle: {
    width: 230,
    height: 40
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 25,
    flex: 1
  }
};

export default HomeScreen;
