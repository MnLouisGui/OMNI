import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/l_screens/login';
import Cadastro from './screens/l_screens/cadastro';
import Recul from './screens/l_screens/recul';
import Home from './screens/screens/home';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#ffff'}, headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Recul" component={Recul}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
