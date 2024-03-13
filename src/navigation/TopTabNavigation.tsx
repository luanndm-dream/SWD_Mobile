import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NoProcessScreen, ProcessScreen } from 'src/screens';
import { styleGobal } from '@/styles';

const TopTabNavigation = () => {
    const Tab = createMaterialTopTabNavigator();
    const screenOptions = {
      tabBarStyle:{
        height:50,
      },
      tabBarItemStyle:{
        margin:5,
      }
    };
  return (
    <Tab.Navigator
    initialRouteName='NoProcess'
  
    >
          <Tab.Screen name='NoProcess' component={NoProcessScreen} />
            <Tab.Screen name='Process' component={ProcessScreen}/>
    </Tab.Navigator>
  )
}

export default TopTabNavigation