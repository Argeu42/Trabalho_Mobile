import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Contexto1} from '../contexts/Contexto';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela3() {
  const {estrela, var1, cliquesTotais, setCliquesTotais} = useContext(Contexto1);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      padding: 24,
    },
    destaque: {
      fontSize: 20,
      textAlign: 'justify',
      color: 'white',
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 8,
    },
    imagem: {
      width: 350,
      height: 500,
      resizeMode: 'contain',
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
      <View>
        <Text  style={styles.destaque}>Uau! Você clicou {cliquesTotais} vezes!</Text>
    </View>
    </SafeAreaView>
    
  );
}
