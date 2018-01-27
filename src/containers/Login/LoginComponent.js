import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Login from '../../components/Login/Login'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    alert('asd')
  }

  changeText = (char) => {
    this.setState({
      text : char
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Login
          evento={(e) => this.submit()}/>
      </View>
    );
  }
}

export default LoginComponent