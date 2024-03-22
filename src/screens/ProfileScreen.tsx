import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import {BoardNameComponent, ButtonComponent, ProfileItemComponent} from '@/components';
import {styleGobal} from '@/styles';
import { useNavigation } from '@react-navigation/native';
import { getUserByIdApi } from 'src/api/get_user_api';
import useLoading from 'src/hook/useLoading';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const {showLoading, hideLoading} = useLoading()
  const [userData, setUserDate] = useState<any>()
  useEffect(()=>{
    showLoading()
      getUserByIdApi(6).then((res: any) => {
        if (res?.statusCode === 200) {
          hideLoading()
          setUserDate(res.data);
          hideLoading();
        }
      })
  },[])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/image/8270297.jpg')}
        style={styles.imageBackground}
      />
      <View style={[styles.content, styleGobal.contentArea ]}>
        <View style={[styles.boardName]}>
          <BoardNameComponent
            name={userData?.name}
            avatarUrl={userData?.avatar}
            position={userData?.roleDescription}
          />
        </View>
        <View>
          <ProfileItemComponent
            iconName={'account'}
            title="Thông tin cá nhân"
            style={styles.styleItem}
            isBox={false}
            onPressIcon={()=>navigation.navigate('UserInformationScreen', {
              data: userData
            })}
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
              navigation.navigate('CompanyInformationScreen' as never);
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
