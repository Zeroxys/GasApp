import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity, Animated} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

const Info = (props) => {
  return (
    <View style={styles.content}>

      <View style={styles.generalContent}>
        <View style={styles.container}>
          
          <TouchableOpacity style={styles.iconContent} onPress={props.showOptions}>
            <Icon name={props.iconName} size={22} color="#ffffff"/>
          </TouchableOpacity>

          <Text>{props.name}</Text>

          <TouchableOpacity onPress={props.showOptions}>
            <Icon name="md-add" size={22}/>
          </TouchableOpacity>

        </View>
        
        <Collapsible style={styles.collapsible} collapsed={false}>
          <TextInput underlineColorAndroid={"white"} style={styles.input} placeholder={props.messageInput}/>
        </Collapsible>
      </View>

    </View> 
  )
}

const styles = StyleSheet.create({

  collapsible : {
    borderRadius : 2,
    justifyContent : 'center',
    alignItems : 'center'
  },

  input : {
    backgroundColor: "#FFFFFF",
    margin:0,
    padding: 0,
    width: '75%'
  },

  generalContent : {
    width : '100%',
    borderWidth : 2,
    height : 80,
  },

  content : {
    width : '90%',
    height : 80,
    flexDirection:'row',
    margin: 10,
    flexDirection: 'row',
    justifyContent : 'space-between',
    backgroundColor : "#A5B7BD",
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