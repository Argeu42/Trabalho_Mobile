import {  View, Text, Button, StyleSheet, SafeAreaView, Image, Alert} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {Contexto1} from '../contexts/Contexto';

export default function Tela1() {
  const {var1, setVar1, estrela, setEstrela} = useContext(Contexto1);
  const [cliqueBotao, setCliqueBotao] = useState(false);
  const Separator = ()=> <View style={styles.separator}/>
  

  function aumentaCliques() {
    setVar1(var1 + 1);
  }

  useEffect(() => {
    aumentaCliques();
  }, [cliqueBotao]);

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
      marginLeft: 60,
      width: 220,
      flex: 1,
      resizeMode: 'center',
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.destaque}>Vezes clicadas: {var1} </Text>
        <Separator/>
        <Button title="Clicar" onPress={() => setCliqueBotao(!cliqueBotao)} />
        <Separator/>
        <Button
          title="Comprar Estrela (10 cliques)"
          onPress={ var1 > 9 ? () => { setVar1(var1 - 10), setEstrela(estrela + 1), Alert.alert("Sucesso!", "Você comprou uma estrela!") ; } : setVar1(var1) }
        />
        
      </View>
      <Image style={styles.imagem} source={require('../images/click.png')}/>
      
    </SafeAreaView>
  );
}
