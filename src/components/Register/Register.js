import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import Buttons from '../Buttons/Button'

const styles = StyleSheet.create({
  content : {
    flex:1,
    flexDirection : 'column',
    alignItems:'center',
    backgroundColor : '#eee'
  },

  container : {
    flex:1,
    flexDirection:'column',
    width: '90%',
  },

  form : {

  },

  input : {
    backgroundColor : 'white'
  },
})

const Register = (props) => {
  return (
    <View style={styles.content}>

      <View style={styles.container}>
        <Text>lasdasdsadsadzxcxzcxzcassdasdqwezc</Text>

        <View>
          <View style={styles.form}>
            <TextInput 
              placeholder="Nombre Completo"
              style={styles.input}/>
            <TextInput placeholder="Email"
              style={styles.input}/>
            <TextInput placeholder="Usuario"
              style={styles.input}/>
            <TextInput placeholder="Contraseña"
              style={styles.input}/>
          </View>

          <Buttons
            title ='Registrar' 
            color = '#3b5998' 
            evento={props.evento}/>
        </View>  
      </View>
    </View>

  )
}

export default Register
