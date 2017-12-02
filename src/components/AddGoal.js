import React, { Component } from 'react';
import { CardSection, Card, Button } from './common';

class HomeScreen extends Component {

  render() {
    const { cardStyle, buttonStyle } = styles;

    return (
      <Card style={cardStyle}>
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
  }
};

export default HomeScreen;
