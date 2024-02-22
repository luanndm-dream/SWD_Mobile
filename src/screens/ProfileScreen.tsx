import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {BoardNameComponent} from '@/components';
import { styleGobal } from '@/styles';

const ProfileScreen = () => {
 
  return (
    <>
      <ImageBackground
        source={require('../assets/image/8270297.jpg')}
        style={styles.imageBackground}
      />
      <View style={[styles.boardName, styleGobal.boxShadow]}>
      <BoardNameComponent
        name="Nguyễn Thành Phú"
        avatarUrl={require('../assets/image/78787.jpg')}
        code="POS1"
        position="Chuyên viên kiểm tra hàng hoá"
      />
      </View>
     
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageBackground: {
    height: 185,
  },
  boardName: {
    zIndex: 3,
    top: -40,
    marginHorizontal: 33,
    shadowOpacity: 0.5,
    shadowRadius: 2 
  }
});
