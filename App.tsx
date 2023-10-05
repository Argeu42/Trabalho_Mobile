import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ContextoProvider from './src/contexts/Contexto';


const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();

import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
import Tela3 from './src/components/Tela3';
//Teste alteração

function Tabs() {
  return (
    <navStack.Navigator>
      <navStack.Screen name="Seu Perfil" component={Tela2} options={{ headerTintColor: 'blue'}} />
      <navStack.Screen name="Estatisticas" component={Tela3} options={{ headerTintColor: 'blue'}}/>
    </navStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ContextoProvider>
        <navBottom.Navigator>
          <navBottom.Screen
            name="Início"
            component={Tela1}
            options={{
              tabBarIcon: () => {
                return <Icon name="hand-pointer" size={25} color="blue" />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'blue',
            }}
          />
          <navBottom.Screen
            name="Perfil"
            component={Tabs}
            options={{
              headerShown: false,  
              tabBarIcon: () => {
                return <Icon name="user" size={25} color="blue" />;
              },
              tabBarActiveTintColor: 'blue',
              tabBarInactiveTintColor: 'blue',
            }}
          />
          
        </navBottom.Navigator>
      </ContextoProvider>
    </NavigationContainer>
  );
}
