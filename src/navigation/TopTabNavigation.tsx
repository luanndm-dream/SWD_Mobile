import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NoProcessScreen, ProcessScreen } from 'src/screens';
import { styleGobal } from '@/styles';
import useLoading from 'src/hook/useLoading';
import { getAllPackageApi } from 'src/api/get_package_api';

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
  //   const {showLoading, hideLoading} = useLoading();
  // const [dataItem, setDataItem] = useState<any[]>();


  //   useEffect(() => {
  //     showLoading();
  //     getAllPackageApi().then((res: any) => {
  //       console.log('resAlalal', res);
  //       if (res.statusCode === 200) {
  //         setDataItem(res.data.items);
  //         console.log('lig');
  //         hideLoading();
  //       } else {
  //         alert('loi api');
  //         hideLoading();
  //       }
  //     });
 
  //   }, []);


  return (
    <Tab.Navigator
    initialRouteName='NoProcess'
  
    >
          <Tab.Screen name='NoProcess' component={NoProcessScreen}   />
            <Tab.Screen name='Process' component={ProcessScreen}/>
    </Tab.Navigator>
  )
}

export default TopTabNavigation