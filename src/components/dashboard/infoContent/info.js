import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const Info = (props) => {
  return (
    <TouchableOpacity 
      style={styles.content}
      onPress={props.showOptions}>
      <View style={styles.container}>
        <View style={styles.iconContent}>
          <Icon name="md-home" size={22} color="#ffffff"/>
        </View>
        <Text>Destino</Text>
        <Icon name="md-add" size={22}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content : {
    width : '90%',
    height : '25%',
    margin: 10,
    flexDirection: 'row',
    justifyContent : 'space-between',
    backgroundColor : "#A5B7BD",
    shadowOffset: { width: 0, height: 2 },
    elevation : 5,
  },

  container : {
    flex:1,
    flexDirection : 'row',
    justifyContent :'space-around',
    alignItems: 'center',
  },

  iconContent : {
    borderRadius: 100,
    width : 25,
    height : 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#4285F4'
  }
})

export default Info