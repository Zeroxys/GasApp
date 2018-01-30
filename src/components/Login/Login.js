import React from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'


import Register from '../Register/Register'

const styles = {
  content : {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width : '100%'
  },

  container : {
    flex: 0,
    justifyContent: 'space-around',
    width : '70%',
    height : 100
  }
}

const Login = (props) => {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Button
            title ='Ingresar' 
            color = '#3b5998' 
            onPress={Actions.signup}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button
            title ='Registrar' 
            color = '#5A8DFE' 
            onPress={Actions.register}/>
        </TouchableOpacity>
      </View>
    </View>)
}

export default Login