import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

import Buttons from '../Buttons/Button'
import Register from '../Register/Register'

const styles = {
  content : {
    flex: 0,
    justifyContent: 'space-between',
    width : '50%',
    height: '20%',
  }
}

const Login = (props) => {
  /*return (
    <View style={styles.content}>

      <Buttons
        title ='Ingresa' 
        color = '#3b5998' 
        evento={props.evento}/>

      <Buttons
        title ='Registrate' 
        color = '#EE6E73' 
        evento={props.evento}/>

    </View>)*/

    return (
      <Register evento = {props.evento}/>
    )
}

export default Login