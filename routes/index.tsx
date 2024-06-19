import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Result from '../screens/Result';
import Home from '../screens/Home';


export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='home' color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name='Ajuda'
          component={Result}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='file-text' color={color} size={size} />;
            },
          }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
