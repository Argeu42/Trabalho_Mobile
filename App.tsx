import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();

import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';

export default function App() {
  return (
    <NavigationContainer>
      <navBottom.Navigator>
        <navBottom.Screen
          name="Home"
          component={Tela1}
          options={{
            tabBarIcon: () => {
              <FontAwesomeIcon icon={faMugSaucer} />;
            },
          }}
        />
        <navBottom.Screen name="Configurações" component={Tela2} />
      </navBottom.Navigator>
    </NavigationContainer>
  );
}
