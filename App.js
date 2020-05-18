import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, Text, Image } from 'react-native'
import Home from './src/components/home'
const Stack = createStackNavigator();


export default App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Pokedex'} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
