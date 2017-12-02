import React, { Component } from 'react';
import { View, Text, LayoutAnimation, TouchableWithoutFeedback, UIManager } from 'react-native';
import { CardSection } from './common';

UIManager.setLayoutAnimationEnabledExperimental(true);

class UsageItem extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  renderDescription() {
    const { descStyle, descContainerStyle } = styles;
    const { description } = this.props;

    if (this.state.expanded) {
      return (
        <CardSection style={[descContainerStyle, this.props.style]}>
          <Text style={descStyle}>
            {description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle, titleContainerStyle } = styles;
    const { title } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.setState({ expanded: !this.state.expanded })}
      >
        <View>
          <CardSection style={titleContainerStyle}>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    height: 46
  },
  descContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 5,
    textAlign: 'center'
  },
  descStyle: {
    fontSize: 14,
    paddingLeft: 10
  }
};

export default UsageItem;
