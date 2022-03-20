import React,{useState} from 'react'
import {SafeAreaView,StyleSheet, } from 'react-native'
import Gasolina from './components/gasolina';
import Etanol from './components/etanol';
import Btncalc from './components/btnCalcular';
import Resultado from './components/resultado';
import ImgResultado from './components/imgResultado';


export default function App() {

  const [gasolina,setGasolina] = useState(0);
  const [etanol,setEtanol] = useState(0);
  const [resultado,setResultado] = useState("");

  const calcular = ()=>{
  if (!gasolina || !etanol){
    setResultado("Preencha todos os campos");
    return
    }

    let res
    let calc=((etanol/gasolina)*100).toFixed(1)

    if (calc>=70){
      res="Gasolina"
    }else{
      res="Etanol"
    }

    alert('O Etanol esta custando' + calc + '% Gasolina. portanto é melhor abastecer com ' + res)
    setResultado(res)
  }

const limpar = ()=>{
  setResultado("");
}

const setarGasolina=(valor)=>{
    limpar();
    setGasolina(valor);
}

const setarEtanol=(valor)=>{
  limpar();
  setEtanol(valor);
}


  return (
    <SafeAreaView style={estilos.principal}>
     <Gasolina aoModificar={setarGasolina} />
     <Etanol aoModificar={setarEtanol}/>
    <Btncalc aoPressionar={calcular}/>
    <Resultado resultado={resultado}/>
    <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({

  principal:{
    flex:1,
    padding:10,
  }

});