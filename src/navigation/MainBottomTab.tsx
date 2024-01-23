
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HomeScreen, NotiScreen, ProfileScreen, PurchaseScreen } from '../screens/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

const bottomTab = createMaterialBottomTabNavigator()
const MainBottomTab = () => {
  const theme = useTheme();
theme.colors.secondaryContainer = "transperent"

  return (
   <bottomTab.Navigator initialRouteName='HomeScreen'
    //  theme={{colors: {secondaryContainer: 'transparent'}}}
    activeColor='#68E1FD'
    barStyle={{ backgroundColor: '#FFFFFF', paddingBottom: 0 }}>
      <bottomTab.Screen name='HomeScreen' component={HomeScreen} options={{
        tabBarLabel:'Home',
        tabBarIcon: ({color}) =>(
          <MaterialCommunityIcons name="home" color={color} size={26}  />
        )
      }}/>
      <bottomTab.Screen name='NotiScreen' component={NotiScreen}
      options={{
        tabBarLabel:'Notification',
        tabBarIcon: ({color}) =>(
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        )
      }}
      />
      <bottomTab.Screen name='PurchaseScreen' component={PurchaseScreen} 
      options={{
        tabBarLabel:'Purchase',
        tabBarIcon: ({color}) =>(
          <MaterialCommunityIcons name="package-variant" color={color} size={26} />
        )
      }}
      />
      <bottomTab.Screen name='ProfileScreen' component={ProfileScreen}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon: ({color}) =>(
          <MaterialCommunityIcons name="account" color={color} size={26} />
        )
      }}/>
   </bottomTab.Navigator>
  )
}

export default MainBottomTab