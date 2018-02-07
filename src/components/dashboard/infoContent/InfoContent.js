import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Button, Dimensions, Animated} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Info from './info'
import ExpandButton from './ExpandButton'

const {width, height} = Dimensions.get('window')

class InfoContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded : true,
      maxHeight : null,
      minHeight : null,
      animation : new Animated.Value(),
    }

    this.setMinHeight = this.setMinHeight.bind(this)
    this.setMaxHeight = this.setMaxHeight.bind(this)
    this.toggle =  this.toggle.bind(this)
  }

  toggle = () => {

    let initialValue = null
    let finalValue = null

    this.setState( prevState => {
      return {
        expanded :  !prevState.expanded
      }
    })

    if(this.state.expanded) {
      initialValue = this.state.maxHeight + this.state.minHeight
    } else {
      initialValue = this.state.minHeight
    }

    if(!this.state.expanded) {
      finalValue = this.state.maxHeight + this.state.minHeight
    } else {
      finalValue = this.state.minHeight
    }

    console.log('Valor inicial ' + initialValue)
    console.log('Valor Final ' + finalValue)

    this.state.animation.setValue(initialValue)
    Animated.spring( this.state.animation,{ toValue: finalValue }).start();
    console.log(this.state.expanded)

    console.log('valor de animacion ' + this.state.animation._value)
  }

  setMaxHeight = (e) => {

    let {width, height} = e.nativeEvent.layout

    this.setState( prevState => {
      return {
        maxHeight : prevState.maxHeight = height
      }
    })
  }

  setMinHeight = (e) => {
    let {width, height} = e.nativeEvent.layout
    this.setState( prevState => {
      return {
        minHeight : prevState.minHeight = height
      }
    })
  }

  render () {
    let arrowIcon = null

    if(this.state.expanded) {
      arrowIcon = "ios-arrow-down"
    } else {
      arrowIcon = "ios-arrow-up"
    }

    return (
      <View style={styles.infoContainers} onLayout={this.setMaxHeight}>
        <ExpandButton arrowIcon={arrowIcon} toogle={() => this.toggle()}/>

        <Animated.View style={[styles.content, {height : this.state.animation}]}>
          
          <View style={styles.generalContent} onLayout={this.setMinHeight}>

            <View>
              <Info
                name="Kilos"
                iconName="ios-flame"
                showOptions = {e => this.props.showOptions(e)}/>
    
              <Info
                name="Cantidad"
                iconName="md-flask"
                showOptions = {e => this.props.showOptions(e)}/>             
            </View>
            <TouchableOpacity
                  style={styles.aprobar}
                  title={"Aprobar"} 
                  onPress={e => this.props.openModal()}>
                  <Text style={{color : 'white'}}>APROBAR</Text>
            </TouchableOpacity>      
          </View>

        </Animated.View>
      </View>  
    )
  }

}

const styles = StyleSheet.create({

  infoContainers : {
    borderWidth : 2,
    borderColor : 'red',
    width : width,
    alignItems: 'center',
    height : '50%'
  },

  // must be expand : false or true
  content :{
    borderWidth : 2,
    borderColor : 'blue',
    alignItems : 'center',
    width : '100%',
    height : '100%',
    minHeight : '10%'
  },

  //must be 0
  generalContent : {
    borderWidth : 2,
    borderColor : 'green',
    width : '90%',
    alignItems : 'center',
    height : '50%'
  },

  aprobar : {
    elevation : 2,
    width : '70%',
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor : "#2A56C6",
    height : '15%'
  }
})

export default InfoContent
