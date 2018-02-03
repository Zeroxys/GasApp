import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Ticket = () => {
  return (
    <View style={styles.content}>
      <View>
        <View>
          <Text>Cliente:</Text>
          <Text>Nombre del Cliente que pedio el servicio</Text>
        </View>

        <View>
          <Text>Dirección:</Text>
          <Text>Dirección donde se llevara el pedido</Text>
        </View>

        <View>
          <Text>Kilos:</Text>
          <Text>10 Kg</Text>
        </View>

        <View>
          <Text>Cantidad:</Text>
          <Text>$100.00</Text>
        </View>

        <View>
          <Text>Telefono del despachador:</Text>
          <Text>99 99 99 99 99</Text>
        </View>

        <View>
          <Text>Nombre del despachador:</Text>
          <Text>Nombre del despachador</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content  : {
    flex : 1,
    flexDirection : 'column',
    borderWidth : 2,
  }
})

export default Ticket
