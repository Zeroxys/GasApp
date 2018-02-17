import React, {Component} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import Home from './src/components/Home/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>asdasdasdasd</Text>
      </View>
    )
  }
}

export default App
