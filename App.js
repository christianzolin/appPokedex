import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, Text, Image } from 'react-native'
import Home from './src/pages/home'
import Geracao from './src/pages/geracao'
import DetalhesPokemon from './src/pages/detalhesPokemon';

const Stack = createStackNavigator();


export default App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Pokedex'>
        <Stack.Screen name={'Pokedex'} component={Home} />
        <Stack.Screen name={'Geracao'} component={Geracao} />
        <Stack.Screen name={'Detalhes'} component={DetalhesPokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
