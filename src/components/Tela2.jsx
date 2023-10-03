import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {Contexto1} from '../contexts/Contexto';
import {useNavigation} from '@react-navigation/native';

import Tela3 from './Tela3';

export default function Tela2() {
  const {var1, estrela} = useContext(Contexto1);
  const nav = useNavigation();
  return (
    <View>
      <Text>Usuário: Argéu</Text>
      <Text>Cliques atuais: {var1}</Text>
      <Text>Estrelas obtidas: {estrela}</Text>

      <Button title="Ver Cliques Totais" onPress={() => nav.navigate(Tela3)} />
    </View>
  );
}
