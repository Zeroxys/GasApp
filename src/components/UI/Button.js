import React from 'react'
import {TouchableOpacity, StyleSheet, View} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

export const Buttons = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContent} onPress={props.getCurrentPosition}>
      <View style={styles.iconContent}>
        <Icon color= "#4285F4" size={28} name="md-locate"/>
      </View>
    </TouchableOpacity>
  )
} 
