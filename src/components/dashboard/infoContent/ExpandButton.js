import React from 'React'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ExpandButton = (props) => {
  return (
    <TouchableOpacity style={styles.expandButton} onPress={props.toogle}>
      <Icon name={props.arrowIcon} size={25}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  expandButton : {
    backgroundColor : '#eee',
    elevation : 2,
    alignItems : 'center',
    width : 30,
    height : 30,
    borderRadius : 100,
    marginTop : 5,
    marginBottom : 5
  }
})

export default ExpandButton
