import React, {Component} from 'react'
import {View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Button,
  TouchableOpacity} from 'react-native'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'

import InfoContent from './infoContent/info'
import PositionButton from './PositionButton'
import GasPrice from './GasPrice'

const {width, height} = Dimensions.get('window')

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
    this.showOptions = this.showOptions.bind(this)
  }

  showOptions = (e) => {
    alert(e)
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
      marker = <MapView.Marker pinColor={'#2A56C6'} coordinate={this.state.currentLocation}/>
    }

    return(
    <View style={styles.content}>

      <View style={styles.mapContent}>
        <MapView 
          style={styles.map}
          loadingIndicatorColor={'#2A56C6'}
          loadingBackgroundColor={'#2A56C6'}
          initialRegion={this.state.currentLocation}
          onPress={this.locationHandler}
          ref = {ref => this.map = ref}>
          {marker}
        </MapView>
        <GasPrice/>
        <PositionButton getCurrentPosition={this.getCurrentPosition}/>
      </View>

      <View style={styles.infoContainers}>
        <View>
          <InfoContent 
            showOptions = {e => this.showOptions(e)}/>
          <InfoContent
            showOptions = {e => this.showOptions(e)}/>          
        </View>
        <Button
            color = "#2A56C6"
            title={"Aprobar"} 
            onPress={Actions.ticket}/>
      </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  content : {
    width: width,
    height : height,
    justifyContent : 'space-around',
    alignItems : 'center'
  },

  mapContent : {
    flex : 0,
    height : '50%',
    alignItems :'center',
  },

  infoContainers : {
    width : width,
    height : '50%',
    flexDirection : 'column', 
    justifyContent :'center',
    alignItems: 'center',
  },

  map : {
    position : 'absolute',
    width : width,
    height : height / 2
  }

})

export default Dashboard
