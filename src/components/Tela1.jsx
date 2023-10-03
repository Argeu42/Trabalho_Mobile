import {View, Text, Button, Alert} from 'react-native';
import React, {useContext} from 'react';
import {Contexto1} from '../contexts/Contexto';

export default function Tela1() {
  const {var1, setVar1, estrela, setEstrela} = useContext(Contexto1);
  
  return (
    <View>
      <Text>Vezes clicadas: {var1} </Text>

      <Button title="Clicar" onPress={() => setVar1(var1 + 1)} />
      
      
      <Button title="Comprar Estrela (10 cliques)" onPress={ (var1>9) ? () => {setVar1(var1 - 10), setEstrela(estrela + 1)} : setVar1(var1) } />
    </View>
  );
}
