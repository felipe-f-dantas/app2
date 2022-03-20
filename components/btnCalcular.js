import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native'

export default props=>{
  return (
    <View style={estilos.bloco}>
      <TouchableHighlight style={estilos.btn} onPress={props.aoPressionar}>
      <Text style={estilos.txtbtn}>Calcular</Text>
      </TouchableHighlight>
    </View>
  )
}


const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
    },
    btn:{
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        padding:10,
    },
    txtbtn:{
        textTransform:'uppercase',
        color:'white',
        fontSize:20,
    },
});