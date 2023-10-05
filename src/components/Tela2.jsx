import {View, Text, Button, SafeAreaView, StyleSheet, Image} from 'react-native';
import React, {useContext} from 'react';
import {Contexto1} from '../contexts/Contexto';
import {useNavigation} from '@react-navigation/native';

export default function Tela2() {
  const {var1, estrela} = useContext(Contexto1);
  const nav = useNavigation();
  const Separator = ()=> <View style={styles.separator}/>


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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.destaque}>Usuário: Argéu</Text>
        <Text style={styles.destaque}>Cliques atuais: {var1}</Text>
        <Text style={styles.destaque}>Estrelas obtidas: {estrela}</Text>
        <Separator/>
        <Button title="Ver Cliques Totais" onPress={() => nav.navigate('Estatisticas')} />
    </View>
    <Image style={styles.imagem} source={require('../images/estrelas.png')}/>
    </SafeAreaView>

  );
}
