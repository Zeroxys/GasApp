import React from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'

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

const Register = (props) => {
  return (
    <View style={styles.content}>
   
      <View style={styles.container}>
        <Text style={styles.information}>
          Velit culpa ex id incididunt fugiat irure velit laborum consequat elit.
        </Text>

        <View>
          <View style={styles.form}>
            <TextInput 
              placeholder="Nombre Completo"
              style={styles.input}/>
            <TextInput placeholder="Email"
              style={styles.inputheyitspriscilaheyitspriscilaheyitspriscilaheyitspriscila}/>
            <TextInput placeholder="Usuario"
              style={styles.input}/>
            <TextInput 
              placeholder="Numero Telefono"
              style={styles.input}/>
            <TextInput 
              placeholder="Contraseña"
              style={styles.input}
              secureTextEntry={true}/>
          </View>

          <Button
            title ='Registrar' 
            color = '#3b5998' 
            onPress={props.evento}/>
        </View>  
      </View>
    </View>

  )
}

export default Register
