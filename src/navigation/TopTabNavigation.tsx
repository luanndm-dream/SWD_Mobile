import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NoProcessScreen, ProcessScreen } from 'src/screens';

const TopTabNavigation = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
    initialRouteName='NoProcess'>
            <Tab.Screen name='NoProcess' component={NoProcessScreen}/>
            <Tab.Screen name='Process' component={ProcessScreen}/>
    </Tab.Navigator>
  )
}

export default TopTabNavigation