import React from 'React'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ExpandButton = (props) => {
  return (
    <TouchableOpacity style={styles.expandButton} onPress={props.toggle}>
      <Icon name={props.arrowIcon} size={25} style={{top : 5}}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  expandButton : {
    backgroundColor : '#eee',
    elevation : 2,
    alignItems : 'center',
    width : 40,
    height : 40,
    borderRadius : 100,
    top:'92%',
    marginBottom : 5,
    marginBottom : 5
  }
})

export default ExpandButton
