import React, { Component } from 'react';
import { Text, Picker, Dimensions } from 'react-native';
import { CardSection, Card, Button, Input } from './common';

class HomeScreen extends Component {
  state = { targetValue: '', targetUnit: '', targetTimespawn: '' };

  render() {
    const { cardStyle, buttonStyle, pickerSectionStyle, pickerStyle, pickerTextStyle } = styles;

    return (
      <Card style={cardStyle}>

        <CardSection>
          <Input 
            label="Target value:"
            keyboardType='numeric'
            value={this.state.targetValue}
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
          <Button>SET GOAL</Button>
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
