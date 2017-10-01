
import React , {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 15,
  },
  photo: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
});

//Syntax 01
// const Row = (props) => (
//   <View style={styles.container}>
//     <Image source={{ uri: props.picture.large}} style={styles.photo} />
//     <Text style={styles.text}>
//       {props.name.first} {props.name.last}
//     </Text>
//   </View>
// );


//Syntax 02
class Row extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image source={{ uri: this.props.data.picture.large}} style={styles.photo} />
        <Text style={styles.text}>
          {this.props.data.name.first} {this.props.data.name.last}
        </Text>
      </View>
    );
  }
}
export default Row;
