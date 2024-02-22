import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import LoginScreen from '../screens/LoginSreen';
import MainBottomTab from './MainBottomTab';
import { useAppSelector } from 'src/redux/reduxHook';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

const RootNavigation: React.FC = () => {
  const accessToken = useAppSelector(state => state.user.token);

  // const [userData, setUserData] = useState<any | null>(null);
  
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('isLogged');
      // setUserData(jsonValue != null ? JSON.parse(jsonValue) : null);
      // console.log('lấy dữ liệu ra', userData);
    } catch (error) {
      console.log('Lỗi get dữ liệu từ store', error);
    }
  }

  // useEffect(() => {
  // getData();
  // console.log(userData?.data?.token)
  // }, []);

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
