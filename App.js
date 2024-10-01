import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/pages/Login/telaLogin'; // Certifique-se de criar esses arquivos
import Acount from './src/pages/CreateAcount/index.js';
import HomeApp from './src/pages/HomeScreen/HomeApp';
import * as Notfication from  'expo-notifications'
const Stack = createNativeStackNavigator();
Notfication.setNotificationHandler({
  handleNotification: async()=>({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: true,
  })
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} 
        options={{headerShown: false}}
        />

        <Stack.Screen name="Create" component={Acount} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="home" component={HomeApp} 
        options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
