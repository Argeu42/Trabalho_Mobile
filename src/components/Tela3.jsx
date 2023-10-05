import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Contexto1} from '../contexts/Contexto';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela3() {
  const {estrela, var1, cliquesTotais, setCliquesTotais} = useContext(Contexto1);
  const Separator = ()=> <View style={styles.separator}/>

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      padding: 24,
    },
    destaque: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 8,
    },
    imagem: {
      width: '90%',
      height: 500,
      resizeMode: 'cover',
      overflow: "hidden",
      borderWidth: 5,
      borderRadius: 100,
      borderColor: 'white',
      alignSelf: 'center',
 
    }
  });


  function calculaEstrelas() {
    let resp;
    resp = (estrela*10) + var1;
    setCliquesTotais(resp)
        
    
  }

  useEffect(() => {
    calculaEstrelas();
  }, [var1,estrela]);

  return (
    <SafeAreaView style={styles.container}>
      <Separator/>        
      <View>
        <Text  style={styles.destaque}>Uau! Você clicou {cliquesTotais} vezes!</Text>
      </View>
      <Separator/>
      <Separator/>
      <Separator/>
      <Image style={styles.imagem} source={require('../images/joia.png')}/>
    </SafeAreaView>
    
  );
}
