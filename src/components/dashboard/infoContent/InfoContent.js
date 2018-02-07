import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Button, Dimensions, Animated} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Info from './info'

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
    this.toogle =  this.toogle.bind(this)
  }

  toogle = () => {

    let initialValue = null
    let finalValue = null

    this.setState( prevState => {
      return {
        expanded :  !prevState.expanded,
      }
    })

    if(this.state.expanded) {
      initialValue = 200
    }else {
      initialValue = height / 4 
    }

    if(!this.state.expanded) {
      finalValue = 100
    } else {
      finalValue = 150
    }

    this.state.animation.setValue(initialValue)
    Animated.spring(
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();

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
      <Animated.View style={[styles.infoContainers]}>

        <TouchableOpacity style={styles.expandButton} onPress={this.toogle}>
          <Icon name={arrowIcon} size={25}/>
        </TouchableOpacity>

        <View style={styles.content} onLayout={this.setMaxHeight}>
          <View onLayout={this.setMinHeight}>
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
    )
  }

}

const styles = StyleSheet.create({
  infoContainers : {
    borderWidth : 2,
    width : width,
    height : height / 2,
    flexDirection : 'column', 
    justifyContent :'center',
    alignItems: 'center',
  },

  content :{
    borderWidth : 2,
    justifyContent: 'center',
    alignItems : 'center',
    width : '90%'
  },

  expandButton : {
    backgroundColor : '#eee',
    elevation : 2,
    alignItems : 'center',
    width : 30,
    height : 30,
    borderRadius : 100,
    marginBottom : 25,
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
