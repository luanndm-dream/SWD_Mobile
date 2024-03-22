import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {styleGobal} from '@/styles';
import {BoardNameComponent, HeaderComponent} from '@/components';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';

const UserInformationScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [userData, setUserData] = useState<any>();
  let dataUser = route.params.data;
  useEffect(() => {
    setUserData(dataUser);
  }, []);
  const onPressBack = () => {
    navigation.goBack();
  };
  const data = [
    {
      label: 'Họ và tên',
      value: userData?.name,
    },
    {
      label: 'Giới tính',
      value: userData?.name === '1' ? 'Nam' : 'Nữ',
    },
    {
      label: 'Số căn cước',
      value: userData?.identity,
    },
    {
      label: 'Số điện thoại',
      value: userData?.phoneNumber,
    },
    {
      label: 'Email',
      value: userData?.email,
    },
    {
      label: 'Trạm làm việc',
      value: userData?.officeId,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/image/8270297.jpg')}
          style={styles.imageBackground}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => onPressBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={'#ffffff'}
              />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Thông tin cá nhân</Text>
          </View>

          <View style={[styles.content]}>
            <View style={[styles.boardName]}>
              <BoardNameComponent
                name={userData?.name}
                avatarUrl={userData?.avatar}
                position={userData?.roleDescription}
              />
            </View>
          </View>
        </ImageBackground>
        <FlatList
            style={styles.userInformationContainer}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default UserInformationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingHorizontal: 8,
    marginVertical: 15,
    alignItems: 'center',

    height: 50,
    borderRadius: 8
  },
  label: {
    fontSize: 20,
    // fontWeight: 'bold'
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  imageBackground: {
    height: 185,
    zIndex: 11,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Can giữa theo chiều dọc
    paddingHorizontal: 8,
    marginTop: 15, // Thêm padding để tránh chạm vào viền màn hình
  },
  userInformationContainer: {
    marginTop: 120,
    backgroundColor: 'white',
  },
  textHeader: {
    flex: 1, // Đảm bảo chữ "Thông tin cá nhân" chiếm hết không gian còn lại
    textAlign: 'center',
    fontSize: 24,
    marginRight: 20,
    color: '#ffffff', // Can giữa theo chiều ngang
  },
  boardName: {
    top: 80,
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
    backgroundColor: '#EDF4FC',
  },
  box: {
    marginTop: 35,
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
  },
});
