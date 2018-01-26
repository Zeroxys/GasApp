import React from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  Item : {
    borderWidth:2,
    borderColor: 'green'
  }
})

const List = (props) => {
  return (
    <Text style={styles.Item}>{props.list}</Text>
  )
}

export default List