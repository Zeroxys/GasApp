import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux'

import Login from '../Login/Login'
import Register from '../Register/Register'
import Signup from '../Signup/Signup'
import Dashboard from '../dashboard/dashboard'

const styles = StyleSheet.create({
  bar : {
    textAlign :'center'
  }
})

const Home =  () => {
  return (
    <Router >
      <Stack key="root">
        <Scene key="login" component={Login} hideNavBar={true}/>
        <Scene key="register" component={Register} titleStyle={styles.bar} title="REGISTRATE"/>
        <Scene key="signup" component={Signup} title="INGRESAR"/>
        <Scene key="dashboard" component={Dashboard} hideNavBar={true}/>
      </Stack>
    </Router>
  )
}

export default Home