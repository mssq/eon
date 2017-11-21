import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import usageData from './data/usageData.json';

class LibraryList extends Component {
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
        renderRow={(data) => <ListItem {...data} />}
      />
    );
  }
}

export default LibraryList;
