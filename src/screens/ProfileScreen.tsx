import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {BoardNameComponent, ButtonComponent, ProfileItemComponent} from '@/components';
import {styleGobal} from '@/styles';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/image/8270297.jpg')}
        style={styles.imageBackground}
      />
      <View style={[styles.content, styleGobal.contentArea ]}>
        <View style={[styles.boardName]}>
          <BoardNameComponent
            name="Nguyễn Thành Phú"
            avatarUrl={require('../assets/image/78787.jpg')}
            code="POS1"
            position="Chuyên viên kiểm tra hàng hoá"
          />
        </View>
        <View>
          <ProfileItemComponent
            iconName={'account'}
            title="Thông tin cá nhân"
            style={styles.styleItem}
            isBox={false}
          />
        </View>
        <View style={styles.box}>
          <ProfileItemComponent
            iconName={'cog'}
            title="Cài đặt"
            isBox={true}
            style={{ borderBottomWidth: StyleSheet.hairlineWidth,}}
          />
          <ProfileItemComponent
            iconName={'star'}
            title="Đánh giá ứng dụng"
            isBox={true}
            style={{ borderBottomWidth: StyleSheet.hairlineWidth,}}
          />
          <ProfileItemComponent
            iconName={'information'}
            title="Thông tin công ty"
            isBox={true}
            onPressIcon={()=>{
              navigate.navigate('CompanyInformationScreen' as never);
            }}
          />
          
        </View>
        <View style={styles.button}>
          <ButtonComponent buttonText='Đăng xuất' onPress={()=>{}} colorButton='#9ecbfe' />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 185,
    zIndex: 1,
  },
  boardName: {
    top: -60,
    marginHorizontal: 33,
  },
  content: {
    paddingTop: 12,
    zIndex: 3,
    flexDirection: 'column',
  },
  styleItem: {
    marginTop: 110,
  },
  button: {
    marginTop: 50,
    marginHorizontal: 80,
    backgroundColor: '#EDF4FC'
  },
  box: {
    marginTop: 35,
    backgroundColor: '#ebebeb',
    justifyContent: 'center',    
  },
});
