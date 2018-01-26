import React from 'react'
import {Button} from 'react-native'

const Buttons = (props) => {

  return (
    <Button style={props.buttons} 
            title={props.title} 
            color={props.color} 
            onPress={props.evento}/>
  )

}

export default Buttons