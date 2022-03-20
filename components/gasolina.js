import React,{useState} from 'react'
import { View, Text, SafeAreaView,Image,StyleSheet,TextInput } from 'react-native'

export default props=>{
  return (
    <View style={estilos.bloco}>
      <Text>Digite o preço da Gasolina</Text>
      <TextInput style={estilos.txt} keyboardType='numeric' onChangeText={text=>props.aoModificar(text)}/>
    </View>
  )
}


const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
    },
    txt:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:7,
    },
});