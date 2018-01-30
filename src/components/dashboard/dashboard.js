import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  content : {
    borderWidth : 2,
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center'
  }
})

class Dashboard extends Component {
  render () {
    return( 
    <View style={styles.content}>
      <View>
        <Text>Aqui va el mapa</Text>
      </View>
      <View>
        <Text>Aqui va lo demas xD</Text>
      </View>
    </View>
    )
  }
}

export default Dashboard
