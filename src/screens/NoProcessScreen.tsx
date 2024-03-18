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

const NoProcess = () => {
  const {showLoading, hideLoading} = useLoading();
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
    getAllPackageApi().then((res: any) => {
    
      if (res.statusCode === 200) {
        const processingItem = res.data.items.map((item: any)=>{
          return {
            ...item,
            status: 0
          }
        })
        setDataItem(processingItem);
        
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
  getAllPackageApi(fromDate, toDate).then((res: any) => {
    console.log('resFilter', res.data.items);
    if (res.statusCode === 200) {
      const processingItem = res.data.items.map((item: any) => {
        return {
          ...item,
          status: 0,
        };
      });
      setDataItem(processingItem);
      
      hideLoading();
    } else {
      alert('loi api');
      hideLoading();
    }
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
                isRequired={true}
                onPress={() => onPressDatePicker('fromDate')}
              />
              <DateTimePickerComponent
                text={toDate ? toDate.toString() : 'Đến ngày'}
                isRequired={true}
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
};

export default NoProcess;

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
