import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux'

import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Signup from '../../components/Signup/Signup'

const styles = StyleSheet.create({
  bar : {
    textAlign :'center'
  }
})

class LoginComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      text : '',
      box : []
    }
    this.submit = this.submit.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  submit = () =>  {
  }

  changeText = (char) => {
    this.setState({
      text : char
    })
  }

  render() {

    return (
      <Router >
        <Stack key="root">
          <Scene key="login" component={Login} hideNavBar={true}/>
          <Scene key="register" component={Register} titleStyle={styles.bar} title="REGISTRATE"/>
          <Scene key="signup" component={Signup} title="INGRESAR"/>
        </Stack>
      </Router>
    );
  }
}

export default LoginComponent