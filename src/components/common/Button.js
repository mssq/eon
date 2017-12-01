import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ style, onPress, children }) => {
  const { buttonStyle, buttonTextStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={style || buttonStyle}>
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#717d91',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#3d3d3d',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
