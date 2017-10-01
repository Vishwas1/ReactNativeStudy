import React , {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop : 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 35,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

//Syntax 01 : Component as a Function
// const Header = (props) => (
//   <View style={styles.container}>
//     <TextInput
//       style={styles.input}
//       placeholder="Search..."
//       onChangeText={(text) => console.log('searching for ', text)}
//         />
//       </View>
//     );

//Syntax 02 : Component as a Class
class Header extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => console.log('searching for ', text)}
            />
       </View>
    )
  }
}
export default Header;
