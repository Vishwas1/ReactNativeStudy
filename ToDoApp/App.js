import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, FlatList } from 'react-native';
import TaskList from './src/TodoList';


class MyTodoApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos : [
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/20638149_1636191716392977_2398087345800278611_n.jpg?oh=e82d1bca66c891cd136d1480a4174ded&oe=5A5110D0'
          }
        },
        {
          name : {
            first : 'Amit',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/21768260_489545998104340_995047856263431703_n.jpg?oh=778212d86641ff92c504a3d1a936ac60&oe=5A854D80'
          }
        },
        {
          name : {
            first : 'Sonu',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/21768260_489545998104340_995047856263431703_n.jpg?oh=778212d86641ff92c504a3d1a936ac60&oe=5A854D80'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/15542157_1146885558693264_8620173272060728986_n.jpg?oh=3fcece12963130183c48f447291f45e7&oe=5A86213D'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/20638149_1636191716392977_2398087345800278611_n.jpg?oh=e82d1bca66c891cd136d1480a4174ded&oe=5A5110D0'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/15542157_1146885558693264_8620173272060728986_n.jpg?oh=3fcece12963130183c48f447291f45e7&oe=5A86213D'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/p240x240/20728012_1668548346551582_7668314838508082894_n.jpg?oh=f9332572cf3983cc8998b52b6c6f2a10&oe=5A40D2E9'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/p240x240/20728012_1668548346551582_7668314838508082894_n.jpg?oh=f9332572cf3983cc8998b52b6c6f2a10&oe=5A40D2E9'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240/p240x240/20638149_1636191716392977_2398087345800278611_n.jpg?oh=e82d1bca66c891cd136d1480a4174ded&oe=5A5110D0'
          }
        },
        {
          name : {
            first : 'Vishwas',
            last : 'Anand'
          },
          picture : {
            large : 'https://scontent.frdp1-1.fna.fbcdn.net/v/t1.0-1/p240x240/20728012_1668548346551582_7668314838508082894_n.jpg?oh=f9332572cf3983cc8998b52b6c6f2a10&oe=5A40D2E9'
          }
        },
      ]
    }
  }

  render(){
    return(
      <TaskList todos ={this.state.todos}  />
    );
  }

}

export default MyTodoApp;
