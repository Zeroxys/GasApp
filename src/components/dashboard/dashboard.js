import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import MapView from 'react-native-maps'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  content : {
  },

  mapContent : {
    width : '100%',
  },

  map : {
    width : width,
    height : height / 2
  }
})

class Dashboard extends Component {

  constructor () {
    super()
    this.state = {
      currentLocation : {
        latitude : 37.7900352,
        longitude : -122.4013723,
        latitudeDelta : 0.0122,
        longitudeDelta : width / height * 0.0122
      }
    }
  }

  render () {
    return( 
    <View style={styles.content}>

      <View style={styles.mapContent}>
        <MapView style={styles.map} initialRegion={this.state.currentLocation}/>
      </View>

      <View>
        <Text>Aqui va lo demas xD</Text>
      </View>

    </View>
    )
  }
}

export default Dashboard
