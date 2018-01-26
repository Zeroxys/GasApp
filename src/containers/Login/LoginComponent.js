import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Buttons from '../../components/Buttons/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
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

        <Buttons
          title ='Ingresa' 
          color = '#3b5998' 
          evento={(e) => this.submit(e)}/>

        <Buttons
          title ='Registrate' 
          color = '#EE6E73' 
          evento={(e) => this.submit(e)}/>

      </View>
    );
  }
}

export default LoginComponent