import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const Ticket = () => {

  const purshase = () => {
    alert('Producto Comprado')
  }

  return (
    <View style={styles.content}>
      <View style={styles.information}>
        <View>
          <Text>Cliente:</Text>
          <Text style={styles.bold}>Nombre del Cliente que pedio el servicio</Text>
        </View>

        <View>
          <Text>Dirección:</Text>
          <Text style={styles.bold}>Dirección donde se llevara el pedido</Text>
        </View>

        <View>
          <Text>Kilos:</Text>
          <Text style={styles.bold}>10 Kg</Text>
        </View>

        <View>
          <Text>Cantidad:</Text>
          <Text style={styles.bold}>$100.00</Text>
        </View>

        <View>
          <Text>Telefono del despachador:</Text>
          <Text style={styles.bold}>99 99 99 99 99</Text>
        </View>

        <View>
          <Text>Nombre del despachador:</Text>
          <Text style={styles.bold}>Nombre del despachador</Text>
        </View>
        
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color : 'white', textAlign : 'center'}}>Comprar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  content  : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  information : {
    width : '80%',
    height : '70%',
    justifyContent : 'space-around'
  },

  bold : {
    color : 'black'
  },

  button : {
    backgroundColor : '#2A56C6',
    width : '40%',
    height : 40,
    justifyContent : 'center',
    alignItems : 'center',
    elevation : 5,
  }

})

export default Ticket
