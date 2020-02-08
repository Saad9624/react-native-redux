import React from 'react' ;
import {View,Text,TextInput, TouchableOpacity,StyleSheet } from 'react-native' 

class Addtodo extends React.Component{

  render(){
    return(
      <View style={styles.v1} >
     
                <TextInput
                    placeholder="Enter Movie name"
                ></TextInput>
            
            

                <TouchableOpacity style={styles.t1} >

                    <Text>Add</Text>
                </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    v1:{
        margin:20 ,
        flexDirection:'row',
        padding:10,
        borderColor:'grey',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    t1:{
        borderColor:'green',
        borderWidth:2,
        padding:10,
        borderRadius:10

    }
})

export default Addtodo;