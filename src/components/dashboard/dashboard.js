import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native'
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
        latitude : 17.989456,
        longitude : -92.947506,
        latitudeDelta : 0.0122,
        longitudeDelta : width / height * 0.0122
      },
      marker : false
    }

    this.locationHandler = this.locationHandler.bind(this)
    this.getCurrentPosition = this.getCurrentPosition.bind(this)
  }

  getCurrentPosition = (event) => {
    navigator.geolocation.getCurrentPosition( pos => {
      
      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude :  pos.coords.longitude
          }
        }
      }
      
      this.locationHandler(coordsEvent)

      console.warn(pos.coords)
    }, error_handler => {
      if(error_handler) alert('get current position failed')
    })
  }

  locationHandler = event => {
    let coords = event.nativeEvent.coordinate

    this.map.animateToRegion({
      ...this.state.currentLocation,
      latitude :  coords.latitude,
      longitude : coords.longitude
    })

    this.setState(prevState => {
      return {
        currentLocation : {
          ...prevState.currentLocation,
          latitude : coords.latitude,
          longitude : coords.longitude
        },
        marker : true
      }
    })
    console.warn(event.nativeEvent.coordinate)
  }

  render () {

    let marker = null

    if(this.state.marker) {
      marker = <MapView.Marker coordinate={this.state.currentLocation}/>
    }

    return( 
    <View style={styles.content}>

      <View style={styles.mapContent}>
        <MapView 
          style={styles.map} 
          initialRegion={this.state.currentLocation}
          onPress={this.locationHandler}
          ref = {ref => this.map = ref}>
          {marker}
        </MapView>
      </View>

      <View>
        <Button title={"Posicion actual"} onPress={this.getCurrentPosition}/>
        <Text>Aqui va lo demas xD</Text>
      </View>

    </View>
    )
  }
}

export default Dashboard
