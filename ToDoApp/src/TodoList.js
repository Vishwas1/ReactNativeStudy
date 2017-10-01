import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, ListView,Image } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Row from './Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  separator: {
    flex: 2,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
  },
});
class TaskList extends Component {
  constructor(props){
    super(props);
    const ds =  new ListView.DataSource({
      rowHasChanged : (r1, r2) => r1 !== r2,
    });
    this.state = {
        dataSource : ds.cloneWithRows(props.todos)
    }

  }
  // componentWillReceiveProps(newProps)
  // {
  //   this.setState({
  //     dataSource : newProps
  //   });
  //   console.log(newProps)
  // }

  renderHeader(){
    return(
      <Header />
    );
  }

  renderFooter(){
    return(
      <Footer />
    );
  }

  renderRow(data){
    return(
      <Row data ={data}/>
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => this.renderRow(data) }
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} /> }
        renderHeader={() => this.renderHeader() }
        renderFooter={() => this.renderFooter() }
      />
    );
  }
}

export default TaskList;
