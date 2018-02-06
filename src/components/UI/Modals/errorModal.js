import React from 'react'
import {Modal, View, StyleSheet, Text} from 'react-native'

export const errorModal = (props) => {
  return (
    <Modal
      onRequestClose={props.closeModal}
      visible={props.visible}
      animationType="slide"
      transparent={true}>

      <View style={styles.content}>
        <Text>{props.message}</Text>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  content : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
})

