import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import LoginComponent from './src/components/Login/LoginComponent'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const App = () => {

  return (
    <View style={styles.container}>
      <LoginComponent/>
    </View>
  )
}

export default App
