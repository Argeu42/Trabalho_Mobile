import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {createContext} from 'react';

export const Contexto1 = createContext();

export default function ContextoProvider({children}) {
  const [var1, setVar1] = useState(-1);
  const [estrela, setEstrela] = useState(0)
  const [cliquesTotais, setCliquesTotais] = useState(0)
  return (
    <Contexto1.Provider value={{var1, setVar1, estrela, setEstrela, cliquesTotais, setCliquesTotais}}>
        {children}
    </Contexto1.Provider>
  );
}
