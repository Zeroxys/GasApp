import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

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

const App = () => {

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  )
}

export default App
