import React,{useState} from 'react'
import { View,Image,StyleSheet, } from 'react-native'

export default props=>{
  return (
    <View style={estilos.bloco}>
    {
      props.comb == "" ?
      <Image source={require('../assets/bomba.png')} style={estilos.bomba} />
      :
      props.comb == "G" ?
      <Image source={require('../assets/bombag.png')} style={estilos.bomba} />
      :
        <Image source={require('../assets/bombae.png')} style={estilos.bomba} />
    }
   
    </View>
  )
}


const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
    },
    bomba:{
      resizeMode:'stretch', 

    },
});