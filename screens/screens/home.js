import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

import Perfil from './Perfil';
import Carrinho from './Carrinho';
import Loja from './Loja';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
      <Tab.Navigator
        screenOptions={
          {
            tabBarStyle:{
              backgroundColor:'black',
              height: "7%"
            },
            tabBarItemStyle:{
              margin:1
            },headerTintColor: "#d4d4d4",
            headerStyle:{
              backgroundColor: "black"
            }
          }
        }>      
      <Tab.Screen
        name="Loja"
        component={Loja}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="#d4d4d4" />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={24} color="#d4d4d4" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="#d4d4d4" />
          ),
        }}
       />
      </Tab.Navigator>
      
  );
}