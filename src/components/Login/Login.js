import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

import Buttons from '../Buttons/Button'

const styles = {
  content : {
    flex: 0,
    justifyContent: 'space-between',
    width : '50%',
    height: '35%',
  }
}

const Login = (props) => {
  return (
    <View style={styles.content}>

      <TextInput placeholder='holita'/>

      <Buttons
        title ='Ingresa' 
        color = '#3b5998' 
        evento={props.evento}/>

      <Buttons
        title ='Registrate' 
        color = '#EE6E73' 
        evento={props.evento}/>

    </View>)
}

export default Login