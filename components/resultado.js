import React,{useState} from 'react'
import { View, Text, StyleSheet, } from 'react-native'

export default props=>{
  return (
    <View style={estilos.bloco}>
      <Text style={estilos.txtvalor}>Melhor Combustivel:  { props.resultado}</Text>
    </View>
  )
}


const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
    },
    txtvalor:{
      fontSize:20,
      color:'blue',
      
    },
});