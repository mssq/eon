import React, { Component } from 'react';
import { ListView } from 'react-native';
import UsageItem from './UsageItem';
import usageData from './data/usageData.json';

class UsageList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(usageData),
    };
  }
  
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <UsageItem {...data} />}
      />
    );
  }
}

export default UsageList;
