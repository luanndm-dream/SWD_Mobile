import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import LoginScreen from '../screens/LoginSreen';
import MainBottomTab from './MainBottomTab';
import { useAppSelector } from 'src/redux/reduxHook';


const Stack = createStackNavigator();

// const Tab = createMaterialBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

const RootNavigation: React.FC = () => {
  const accessToken = useAppSelector(state => state.user.accessToken);
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={accessToken ? 'MainScreen' : 'LoginScreen'}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
