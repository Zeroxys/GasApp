import React from 'react'
import {View, StyleSheet, TouchableOpacity, Button, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Info from './info'

const {width, height} = Dimensions.get('window')

const InfoContent  = (props) => {
  return (
    <View 
      style={styles.infoContainers}>

      <TouchableOpacity>
        <Icon name="ios-arrow-down" size={25}/>
      </TouchableOpacity>

      <View>
        <Info
          name="Kilos"
          iconName="ios-flame"
          showOptions = {e => this.showOptions(e)}/>

        <Info
          name="Cantidad"
          iconName="md-flask"
          showOptions = {e => this.showOptions(e)}/>
                    
      </View>
      <Button
            color = "#2A56C6"
            title={"Aprobar"} 
            onPress={this.OpenModal}/>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainers : {
    width : width,
    height : '50%',
    flexDirection : 'column', 
    justifyContent :'center',
    alignItems: 'center',
  }
})

export default InfoContent
