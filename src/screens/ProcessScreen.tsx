import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styleGobal} from '@/styles';
import {
  ButtonComponent,
  DateTimePickerComponent,
  PackageItemComponent,
} from '@/components';
import DatePicker from 'src/components/DatePicker';
import {isEmpty} from 'src/utils/validation';
import moment from 'moment';
import {getAllPackageApi} from 'src/api/get_package_api';
import useLoading from 'src/hook/useLoading';
import { useNavigation } from '@react-navigation/native';
import { getAllPackageByStatusApi } from 'src/api/get_packageByStatus_api';
const ProcessScreen = () => {
  const {showLoading, hideLoading} = useLoading();
  const navigation = useNavigation<any>()
  const [visible, setVisile] = useState(false);
  const [dateOutput, setDateOutput] = useState<Date>();
  const [activeComponent, setActiveComponent] = useState<String>();
  const [dataItem, setDataItem] = useState<any[]>();
  const onPressDatePicker = (type: String) => {
    setVisile(true);
    setActiveComponent(type);
  };
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const confirmDateHandler = (dateOutput: Date) => {
    setDateOutput(dateOutput);
    console.log(dateOutput);
    setVisile(false);
    if (activeComponent === 'fromDate') {
      setFromDate(dateOutput);
    } else {
      setToDate(dateOutput);
    }
  };

  useEffect(() => {
    showLoading();
    getAllPackageByStatusApi(1).then((res: any) => {
      // console.log(res)
      if (res.statusCode === 200) {
        // const processItem: any[] = [];
        // res.data.items.forEach((item: any) => {
        //   if (item?.status === 4 || item?.status === 1 || item?.status === -1) {
        //     processItem.push({
        //       ...item,
        //       status: item?.status
        //     });
        //   }
        // });
        // setDataItem(processItem);
        setDataItem(res.data.items)
        hideLoading();
      } else {
        alert('loi api');
        hideLoading();
      }
    });
  }, []);

  const searchHandle = (fromDate: Date | null, toDate: Date | null) => {
  console.log('gọiData', fromDate,toDate);
  showLoading();
  getAllPackageApi(fromDate?fromDate : null, toDate? toDate : null).then((res: any) => {
    console.log('resFilter', res.data.items);
    if (res.statusCode === 200) {
      const processItem: any[] = [];
        res.data.items.forEach((item: any) => {
          if (item.status === 1) {
            processItem.push({
              ...item,
              status: item.status
            });
          }
        });
        setDataItem(processItem);
        hideLoading();
    } else {
      alert('loi api');
      hideLoading();
    }
  });
};
const onNavigationDetailScreen = (item: any) => {
  navigation.navigate('PackageDetailScreen', {
   
    data: item
  });
};

  return (
    <>
      <SafeAreaView style={styleGobal.androidSafeArea}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.dateTimePicker}>
              <DateTimePickerComponent
                text={fromDate ? fromDate.toString() : 'Từ ngày'}
                // isRequired={true}
                onPress={() => onPressDatePicker('fromDate')}
              />
              <DateTimePickerComponent
                text={toDate ? toDate.toString() : 'Đến ngày'}
                // isRequired={true}
                onPress={() => onPressDatePicker('toDate')}
              />
            </View>
            <ButtonComponent
              buttonText="Tìm kiếm"
              colorButton="#4BA2B6"
              style={styles.buttonConfirm}
              onPress={()=>searchHandle(fromDate, toDate)}
            />
          </View>
          <View style={styleGobal.contentArea}>
            <FlatList
            showsVerticalScrollIndicator={false}
              data={dataItem}
              renderItem={({item}) => {
                return (
                  <PackageItemComponent
                    createTime={item.createTime}
                    id={item.id}
                    fromOfficeId={item.fromOfficeId}
                    weight={item.totalWeight}
                    imageUrl={item.image}
                    status={item.status}
                    onPress={()=>onNavigationDetailScreen(item)}
                  />
                );
              }}
            />
          </View>
         
        </View>
      </SafeAreaView>

      {visible && (
        <DatePicker
          onCancel={() => setVisile(false)}
          onConfirm={confirmDateHandler}
          value={moment(
            activeComponent === 'fromDate' ? fromDate : toDate,
            'DD-MM-YYYY',
          ).format('YYYY-MM-DD')}
        />
      )}
    </>
  );

}

export default ProcessScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: 161,
    width: '95%',
    backgroundColor: '#E4E4E4',
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  dateTimePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 12,
  },
  buttonConfirm: {
    marginTop: 30,
    marginHorizontal: 10,
  },
});
