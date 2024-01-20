import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import LoginScreen from '../screens/LoginSreen';





const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();
export const navigationRef = createNavigationContainerRef()



const RootNavigation: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator    screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
