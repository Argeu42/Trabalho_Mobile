import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <navStack.Screen name="Tela2" component={Tela2} />
      <navStack.Screen name="Tela3" component={Tela3} />
    </navStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ContextoProvider>
        <navBottom.Navigator>
          <navBottom.Screen
            name="Home"
            component={Tela1}
            options={{
              tabBarIcon: () => {
                return <Icon name="home" size={30} color="black" />;
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
            }}
          />
          <navBottom.Screen
            name="Perfil"
            component={Tabs}
            options={{
              headerShown: false,  
              tabBarIcon: () => {
                return <Icon name="user" size={30} color="black" />;
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'gray',
            }}
          />
          
        </navBottom.Navigator>
      </ContextoProvider>
    </NavigationContainer>
  );
}
