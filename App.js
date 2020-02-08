import React from 'react' ;
import {View,Text } from 'react-native' 
import TodoApp from './src/TodoApp' ;
import store from './src/store'
import {Provider} from 'react-redux' 

class App extends React.Component{

  render(){
    return(
      <Provider store={store} >
        <TodoApp></TodoApp>
      </Provider>
    )
  }
}

export default App;