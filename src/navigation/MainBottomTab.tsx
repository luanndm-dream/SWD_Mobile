import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  HomeScreen,
  NoProcessScreen,
  NotiScreen,
  ProcessScreen,
  ProfileScreen,
  PurchaseScreen,
} from '../screens/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { Platform, SafeAreaView, StyleSheet } from 'react-native';


const bottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  return (
    <SafeAreaView style={styles.topTapStyle}>
   
    <TopTab.Navigator>
      <TopTab.Screen name="NoProcess" component={NoProcessScreen} />
      <TopTab.Screen name="Process" component={ProcessScreen} />
    </TopTab.Navigator>
    </SafeAreaView>
  );
};
const MainBottomTab = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  return (
    <bottomTab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#68E1FD"
      barStyle={{backgroundColor: '#FFFFFF', paddingBottom: 0}}>
      <bottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <bottomTab.Screen
        name="NotiScreen"
        component={NotiScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <bottomTab.Screen
        name="PurchaseScreen"
        component={TopTabNavigator}
        options={{
          tabBarLabel: 'Purchase',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="package-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <bottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
};

export default MainBottomTab;
const styles = StyleSheet.create({
  topTapStyle : {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 25 : 0
  }
})