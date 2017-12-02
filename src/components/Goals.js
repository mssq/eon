import React, { Component } from 'react';
import { CardSection, Card, Button } from './common';
import { DailyConsumption } from './DailyConsumption';

class HomeScreen extends Component {

  render() {
    const { cardStyle, consumptionStyle, buttonStyle } = styles;
    const { navigate } = this.props.navigation;

    return (
      <Card style={cardStyle}>
        <DailyConsumption style={consumptionStyle} />

        <CardSection style={buttonStyle}>
          <Button
            onPress={() => navigate('goalStack')}
          >
            Set new goal
          </Button>
        </CardSection>

        <CardSection style={buttonStyle}>
          <Button>Past goals</Button>
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
  consumptionStyle: {
    height: 90,
    width: 200,
    marginTop: 40,
    marginBottom: 100,
    justifyContent: 'center',
    backgroundColor: 'rgba(70, 130, 180, 1)',
    borderRadius: 12
  },
  buttonStyle: {
    padding: 5,
    marginBottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default HomeScreen;
