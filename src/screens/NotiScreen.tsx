import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import { HeaderComponent } from '@/components';
import { styleGobal } from '@/styles';


const NotiScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent headerTitle = "Thông báo và tin tức" />
      <View style = {styles.container}>
        <View>
        <Text style = {styles.title}>Thông báo (<Text style= {styles.countNoti}>{10}</Text>)</Text>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default NotiScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  countNoti: {
    color: 'red'
  }
})