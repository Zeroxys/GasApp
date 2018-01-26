import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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
    if(this.state.text.trim() === '') {
      return 'empty'
    }

    this.setState(prevState => {
      return {
        box : prevState.box.concat(prevState.text)
      }
    })
  }

  changeText = (char) => {
    this.setState({
      text : char
    })
  }

  render() {

    return (
      <View style={styles.container}>

        <Text>lool</Text>

      </View>
    );
  }
}

export default LoginComponent