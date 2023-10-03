import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Contexto1} from '../contexts/Contexto';

export default function Tela3() {
  const {estrela, var1, cliquesTotais, setCliquesTotais} = useContext(Contexto1);

  function calculaEstrelas() {
    let resp;
    resp = (estrela*10) + var1;
    setCliquesTotais(resp)
        
    
  }

  useEffect(() => {
    calculaEstrelas();
  }, [var1,estrela]);

  return (
    <View>
      <Text>Uau! Você clicou {cliquesTotais} vezes!</Text>
    </View>
  );
}
