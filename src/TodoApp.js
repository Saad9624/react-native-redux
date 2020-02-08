import React from 'react' ;
import {View,Text } from 'react-native' 
import Addtodo from './components/Addtodo' 

class TodoApp extends React.Component{

  render(){
    return(
      <View>
        <Addtodo></Addtodo>
      </View>
    )
  }
}

export default TodoApp;