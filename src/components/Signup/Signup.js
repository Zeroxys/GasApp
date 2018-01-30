import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  content : {
    flex:1,
    flexDirection : 'column',
    alignItems:'center',
    backgroundColor : '#eee'
  },

  container : {
    minHeight : '100%',
    width: '85%',
  },

  form : {
    backgroundColor: 'white',
    marginBottom : 30
  },

  input : {
  },

  information : {
    textAlign: 'center',
    marginTop: 30,
    marginBottom : 30
  }
})

const Signup = (props) => {
  return (
    <View style={styles.content}>   
      <View style={styles.container}>
        <Text style={styles.information}>
          Ingresar sus datos de usuario.
        </Text>

        <View>
          <View style={styles.form}>
            <TextInput placeholder="Usuario"
              style={styles.input}/>
            <TextInput 
              placeholder="Contraseña"
              style={styles.input}
              secureTextEntry={true}/>
          </View>

          <Button
            title ='Entrar' 
            color = '#3b5998' 
            onPress={Actions.dashboard}/>
        </View>
      </View>
    </View>
  )
}

export default Signup

