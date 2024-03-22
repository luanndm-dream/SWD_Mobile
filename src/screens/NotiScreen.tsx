import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HeaderComponent} from '@/components';
import {styleGobal} from '@/styles';
import {getAllPackageByStatusApi} from 'src/api/get_packageByStatus_api';
import useLoading from 'src/hook/useLoading';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {updatePackageApi} from 'src/api/put_package_api';
const NotiScreen = () => {
  const [packageStatus, setPackgeStatus] = useState<any>();
  const [numOfNoti, setNumOfNoti] = useState<number>(0);
  const {showLoading, hideLoading} = useLoading();
  const [formImage, setFormImage] = useState<any>();

  const navigation = useNavigation<any>();
  useEffect(() => {
    showLoading();
    getAllPackageByStatusApi(5).then((res: any) => {
      if (res?.statusCode === 200) {
      
        setPackgeStatus(res?.data?.items);
        setNumOfNoti(res?.data?.items?.length ?? 0);
        hideLoading();
      }
    });
    // console.log(packageStatus)
  }, []);
 
  const onPressItem = (itemData: any) => {
    const formdata = new FormData();
    formdata.append('image[]', {
            name: 'test.' + packageStatus[0]?.image?.type?.substr(6),
            type: packageStatus[0]?.image?.type,
            uri:
              Platform.OS !== 'android'
                ? 'file://' + packageStatus[0]?.image?.uri
                : packageStatus[0]?.image?.uri,
              
          });
          setFormImage(formdata)
          console.log('FormData:', formdata);
          console.log(  
      packageStatus[0]?.id,
      packageStatus[0]?.busId,
      packageStatus[0]?.fromOfficeId,
      packageStatus[0]?.toOfficeId,
      packageStatus[0]?.stationId,
      packageStatus[0]?.quantity,
      packageStatus[0]?.totalWeight,
      packageStatus[0]?.totalPrice,
      // packageStatus[0]?.image,
      packageStatus[0]?.note,
     )
    updatePackageApi(
      packageStatus[0]?.id,
      packageStatus[0]?.busId,
      packageStatus[0]?.fromOfficeId,
      packageStatus[0]?.toOfficeId,
      packageStatus[0]?.stationId,
      packageStatus[0]?.quantity,
      packageStatus[0]?.totalWeight,
      packageStatus[0]?.totalPrice,
      formImage,
      packageStatus[0]?.note,
      0,
    ).then((res: any) => {
      navigation.navigate('PackageDetailScreen', {
        dataFromNoti: itemData,
      });
      // console.log(res)
      // if (res?.statusCode === 200) {
      //   console.log(res?.data?.items);
    
      // }
    });;
  
  };
  return (
    <>
      <HeaderComponent headerTitle="Thông báo" />
      <SafeAreaView style={styleGobal.androidSafeArea}>
        <Text style={styles.title}>
          Thông báo <Text style={styles.countNoti}>({numOfNoti})</Text>
        </Text>
        <FlatList
          data={packageStatus}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.notificationItem}
                onPress={() => onPressItem(item)}>
                <MaterialCommunityIcons name="bell" size={30} color="red" />
                <View style={styles.notificationContent}>
                  <View style={styles.notificationHeader}>
                    <Text style={styles.notificationTitle}>
                      Có đơn hàng mới #{item.id}
                    </Text>
                    <Text style={styles.notificationTime}>
                      {item.createTime}
                    </Text>
                  </View>
                  <Text style={styles.notificationText}>
                    Trạm của bạn vừa có đơn hàng mới. Hãy ấn vào để xem chi
                    tiết.
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default NotiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  countNoti: {
    color: 'red',
  },
  notificationList: {
    paddingTop: 8,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  notificationContent: {
    flex: 1,
    marginLeft: 16,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666',
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
});
