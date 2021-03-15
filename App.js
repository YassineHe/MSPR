  
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/Home.js"
import Barcode from "./components/Barcode"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
	initialRouteName={'Home'}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          animationEnabled: false,
        }}
        mode={'card'}>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown:false
          }}
          />

        <Stack.Screen 
          name="Barcode" 
          component={Barcode} 
          options={{
            headerShown:false
          }}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
