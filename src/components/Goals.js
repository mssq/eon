import React, { Component } from 'react';
import { CardSection, Card, Button } from './common';
import { CurrentConsumption } from './CurrentConsumption';

class HomeScreen extends Component {

  render() {
    const { cardStyle, buttonStyleOne, buttonStyleTwo } = styles;
    const { navigate } = this.props.navigation;

    return (
      <Card style={cardStyle}>
        <CurrentConsumption />

        <CardSection style={buttonStyleOne}>
          <Button
            onPress={() => navigate('goalStack')}
          >
            Set new goal
          </Button>
        </CardSection>

        <CardSection style={buttonStyleTwo}>
          <Button
            onPress={() => navigate('Goal History')}
          >
            Past goals</Button>
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
  buttonStyleOne: {
    padding: 5,
    marginTop: 60,
    marginBottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  buttonStyleTwo: {
    padding: 5,
    marginBottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default HomeScreen;
