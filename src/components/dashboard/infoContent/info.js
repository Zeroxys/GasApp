import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  content : {
    width : '90%',
    height : '20%',
    flexDirection: 'row',
    justifyContent : 'space-between',
    backgroundColor : "#A5B7BD"
  }
})

const Info = (props) => {
  return (
    <TouchableOpacity 
      style={styles.content}
      onPress={props.showOptions}>
      <View >
        <Icon name="md-home"/>
        <Text>Destino</Text>
        <Icon name="md-add"/>
      </View>
    </TouchableOpacity>
  )
}

export default Info