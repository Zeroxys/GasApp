import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'

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
        <Text>Icon</Text>
        <Text>Destino</Text>
        <Text>Icon</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Info