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

import PositionButton from './PositionButton'
import GasPrice from './GasPrice'
import Ticket from '../Ticket/Ticket'
import MapViewDirection from '../MapView/MapDirections'
import InfoContent from '../dashboard/infoContent/InfoContent'

const {width, height} = Dimensions.get('window')

class Dashboard extends Component {

  constructor () {
    super()
    this.state = {
      expand : true,
      minHeight : null,
      maxHeight : null,

      currentLocation : {
        latitude : 17.989456,
        longitude : -92.947506,
        latitudeDelta : 0.0122,
        longitudeDelta : width / height * 0.0122
      },

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

    //Animation Binds
    this.setMaxHeight = this.setMaxHeight.bind(this)
    this.setMinHeight = this.setMinHeight.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  ////// Animation Functions ///////////

  toggle = () => {

    this.setState( prevState => {
      return {
        expand : !prevState.expand
      }
    })

    let animateInitialValue = this.state.expand? this.state.maxHeight + this.state.minHeight : this.state.minHeight
    let animateFinalValue = this.state.expand? this.state.minHeight : this.state.maxHeight + this.state.minHeight

    this.state.animation.setValue(animateInitialValue)
    Animated.spring(this.state.animation, { toValue: animateFinalValue}).start()
  }

  setMaxHeight = (e) => {
    let height = e.nativeEvent.layout.height
    this.setState( prevState => {
      return  {
        maxHeight : prevState.maxHeight = height
      }
    })
  }

  setMinHeight = (e) => {
    let height = e.nativeEvent.layout.height
    this.setState( prevState => {
      return {
        minHeight :  prevState.minHeight = height
      }
    })
  }


  /////////////////////////////////////

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

    if(this.state.marker) {
      marker = <MapView.Marker pinColor={'#2A56C6'} coordinate={this.state.currentLocation}/>
    }

    return(
    <View style={styles.content}>

      <Ticket visible={this.state.visible} closeModal={this.closeModal}/>

      <Animated.View style={[styles.mapContent, {height : this.state.animation}]}>
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
        <GasPrice/>
        <PositionButton getCurrentPosition={this.getCurrentPosition}/>
      </Animated.View>

      <View onLayout={this.setMinHeight}>
        <InfoContent
          setMaxHeight = {this.setMaxHeight}
          toggle = {this.toggle}
          expand = {this.state.expand}
          openModal={this.openModal} 
          showOptions={this.showOptions}/>
      </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  content : {
    width: '100%',
    height : '100%',
  },

  mapContent : {
    width : width,
    alignItems :'center',
    //height : '94%'
  },

  map : {
    position : 'absolute',
    width : width,
    height : '100%'
  }
})

export default Dashboard
