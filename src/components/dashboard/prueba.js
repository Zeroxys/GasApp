import React from 'react'
import {View, Text} from 'react-native'

const Prueba = () => {

  const test = () => {
    alert('Prueba...')
  }

  return (
    <View onPress={test}>
      <Text>
        Testing...
      </Text>
    </View>
  )

}

export default Prueba