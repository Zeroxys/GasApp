import React, {Component} from 'react'
import {View,Text, StyleSheet, TouchableOpacity, Button, Dimensions, Animated} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

import Info from './info'

const {width, height} = Dimensions.get('window')

class InfoContent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded : true,
      maxHeight : null,
      minHeight : null,
    }
  }

  render () {
    let arrowIcon = null

    if(this.props.expand) {
      arrowIcon = "ios-arrow-up"
    } else {
      arrowIcon = "ios-arrow-down"
    }

    return (
      <View style={styles.infoContainers}>
        <View style={styles.generalContent}>
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
      </View>
    )
  }

}

const styles = StyleSheet.create({

  infoContainers : {
    width : '100%',
    borderWidth : 2,
    borderColor : 'red',
    width : width,
    justifyContent : 'center',
    alignItems : 'center'
  },

  generalContent : {
    borderWidth : 2,
    borderColor : 'green',
    width : '90%',
    height : '60%',
    justifyContent : 'center',
    alignItems : 'center',
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
