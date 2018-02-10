import React, {Component} from 'react'
import {
  Animated,
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Button,
  TouchableOpacity} from 'react-native'

import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

import PositionButton from './PositionButton'
import GasPrice from './GasPrice'
import Ticket from '../Ticket/Ticket'
import MapViewDirection from '../MapView/MapDirections'
import InfoContent from '../dashboard/infoContent/InfoContent'
import ExpandButton from '../dashboard/infoContent/ExpandButton'

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

      expand : true,
      marker : false,
      visible : false,
      animation : new Animated.Value()
    }

    //Location and Modal binds
    this.locationHandler = this.locationHandler.bind(this)
    this.getCurrentPosition = this.getCurrentPosition.bind(this)
    this.showOptions = this.showOptions.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)

    //Set the toggle function
    this.toggle = this.toggle.bind(this)
  }

  toggle = () => {
    this.setState( prevState => {
      return {
        expand : !prevState.expand
      }
    })
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
  }

  // Modal Methods
  openModal = () => {
    this.setState( prevState => {
      return  {
        visible : prevState.visible = true
      }
    })

  }

  closeModal = () => {
    this.setState( prevState => {
      return  {
        visible : prevState.visible = false
      }
    })
  }

  //LifeCycles Hooks
  componentDidMount() {
    this.getCurrentPosition()
  }

  render () {

    let marker = null

    let arrowIcon = null

    if(this.state.expand) {
      arrowIcon = "ios-arrow-up"
    } else {
      arrowIcon = "ios-arrow-down"
    }

    if(this.state.marker) {
      marker = <MapView.Marker pinColor={'#2A56C6'} coordinate={this.state.currentLocation}/>
    }

    return(
    <View style={styles.content}>

      <Ticket visible={this.state.visible} closeModal={this.closeModal}/>
      
      <View style={styles.mapContent}>
        <MapView 
          style={styles.map}
          loadingIndicatorColor={'#2A56C6'}
          loadingBackgroundColor={'#2A56C6'}
          initialRegion={this.state.currentLocation}
          onPress={this.locationHandler}
          ref = {ref => this.map = ref}>
          {marker}

          <MapViewDirection currentLocation={this.state.currentLocation}/>

        </MapView>
        <ExpandButton
          toggle={() => this.toggle()}
          arrowIcon={arrowIcon}/>
        <GasPrice/>
        <PositionButton getCurrentPosition={this.getCurrentPosition}/>
      </View>
      

      <InfoContent
        toggle = {this.toggle}
        expand = {this.state.expand}
        openModal={this.openModal} 
        showOptions={this.showOptions}/>

    </View>
    )
  }
}
const styles = StyleSheet.create({
  content : {
    flex : 1,
    width: '100%',
    height : '100%',
    justifyContent : 'flex-end',
    alignItems : 'center'
  },

  mapContent : {
    width : '100%',
    minHeight : '100%',
    maxHeight : '100%',
    alignItems :'center',
  },

  map : {
    position : 'absolute',
    width : '100%',
    height : '100%'
  }
})

export default Dashboard
