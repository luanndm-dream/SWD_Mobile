import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ButtonComponent,
  DatePicker,
  DateTimePickerComponent,
  HeaderComponent,
  ModalBottomSearchBusComponent,
  ModalBottomSearchComponent,
} from '@/components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styleGobal} from '@/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import * as ImagePicker from 'react-native-image-picker';

import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {createPackageAPI} from 'src/api/post_createPackage';
import {BASE64_TEST} from '@/constants';

const CreateOrderScreen = () => {
  const route = useRoute<any>();
  console.log('route',route)
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSelectionBus, setIsSelectionBus] = useState<boolean>(false);
  const [selectedBus, setIsSelectedBus] = useState<number>();
  const [busName, setBusName] = useState<string>();
  const [fromStationId, setFromStationId] = useState<number>();
  const [fromStationName, setFromStationName] = useState<string>();
  const [fromOfficeId, setFromOfficeId] = useState<number | undefined>();
  const [toOfficeId, setToOfficeId] = useState<number | undefined>();
  const [selectedDate, setSelectedDate] = useState<any>();
  const [quantity, setQuantity] = useState<number>(0);
  const [totalWeight, setTotalWeight] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [note, setNote] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const [response, setResponse] = React.useState<any>(null);
  const [visibleDateTimePicker, setVisibleDateTimePicker] =
    useState<boolean>(false);
  const includeExtra = true;
  const onPressSearch = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);
  const onPressSearchBus = useCallback(() => {
    setIsSelectionBus(true);
  }, [isSelectionBus]);

  const onPressDatePicker = () => {
    setVisibleDateTimePicker(true);
  };
  const confirmDateHandler = (dateOutput: Date) => {
    setSelectedDate(dateOutput);
    console.log(dateOutput);
    setVisibleDateTimePicker(false);
  };

  useEffect(()=>{
    setFromStationId(route.params.data.stationId);
    setFromStationName(route.params.data.stationName);
  },[route])
  const handleSelectStation = (
    stationId: number,

    stationName: string,
  ) => {

    setFromStationId(stationId);
    setFromStationName(stationName);
  };

  const handleSelectBus = (busId: number, busName: string) => {
    setIsSelectedBus(busId);
    setBusName(busName);

    // Xử lý logic khác tại đây nếu cần
  };

  const countNumOfItem = (type: string) => {
    if (type === 'plus' && quantity >= 0) {
      setQuantity(quantity + 1);
    } else if (type === 'minus' && quantity >= 0) {
      setQuantity(quantity - 1);
    }
  };

  const navigation = useNavigation();
  const onPressBackIcon = () => {
    navigation.goBack();
  };
  const submitHandle = () => {
   
    createPackageAPI(
      selectedBus as never,
      fromOfficeId,
      toOfficeId,
      fromStationId,
      quantity,
      totalWeight,
      totalPrice,
      BASE64_TEST,
      'note',
      5,
    ).then(res => {
      // console.log('create', res);
    });
  };

  const onButtonPress = React.useCallback((type: any, options: any) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
  React.useEffect(() => {
    if (response?.didCancel) {
      console.log('User cancelled image picker');
    } else if (response?.errorCode) {
      console.log('ImagePicker Error: ', response.errorCode);
    } else if (response?.assets) {
      // Check if assets array is not empty
      if (response.assets.length > 0) {
        const base64Image = response.assets[0].base64;
        // setImageUrl(base64Image);
      }
    }
  }, [response]);

  // console.log('BASE 64',imageUrl)
  return (
    <>
      <HeaderComponent
        headerTitle="Tạo đơn hàng"
        iconName="chevron-left"
        onPressIcon={onPressBackIcon}
      />
      <SafeAreaView
        style={[styleGobal.androidSafeArea, styles.container]}
        onTouchStart={() => Keyboard.dismiss()}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior="padding"
            style={{flex: 1, marginBottom: 20}}>
            <Text style={styles.title}>
              Chọn trạm đến
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <TouchableOpacity
              style={styles.labelSearch}
              onPress={onPressSearch}>
              <Text style={styles.text}>
                {fromStationName ? fromStationName : 'Chọn trạm đến'}
              </Text>

              <MaterialCommunityIcons name="chevron-down" size={30} />
            </TouchableOpacity>
            <Text style={styles.title}>
              Từ OFFICE số
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View style={styles.weightOfPackage}>
              <TextInput
                placeholder="Vui lòng chọn từ OFFICE số"
                keyboardType="numeric"
                value={fromOfficeId?.toString()}
                onChangeText={(fromOfficeId: string) => {
                  setFromOfficeId(Number(fromOfficeId)); // Chuyển đổi chuỗi thành số và cập nhật state
                }}
              />
            </View>
            <Text style={styles.title}>
              Tới OFFICE số
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View style={styles.weightOfPackage}>
              <TextInput
                placeholder="Vui lòng chọn đến OFFICE số"
                keyboardType="numeric"
                value={toOfficeId?.toString()}
                onChangeText={(toOfficeId: string) => {
                  setToOfficeId(Number(toOfficeId)); // Chuyển đổi chuỗi thành số và cập nhật state
                }}
              />
            </View>
            <Text style={styles.title}>
              Chọn xe BUS
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <TouchableOpacity
              style={styles.labelSearch}
              onPress={onPressSearchBus}>
              <Text style={styles.text}>
                {busName ? busName : 'Chọn xe bus'}
              </Text>

              <MaterialCommunityIcons name="chevron-down" size={30} />
            </TouchableOpacity>

            {/* <Text style={styles.title}>
              Thời gian
             
            </Text>
            <DateTimePickerComponent
              style={{heigh: 400}}
              text={selectedDate ? selectedDate.toString() : 'Chọn ngày'}
              isRequired={false}
              onPress={() => onPressDatePicker()}
            /> */}
            <Text style={styles.title}>
              Số lượng hàng hoá
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View style={styles.numOfItemContainer}>
              <Text style={styles.text}>{quantity}</Text>
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => countNumOfItem('minus')}>
                  <MaterialCommunityIcons name="minus" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countNumOfItem('plus')}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={30}
                    color={'#266EF1'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title}>
              Khối lượng hàng hoá
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View style={styles.weightOfPackage}>
              <TextInput
                placeholder="Vui lòng nhập tổng khối lượng kiện hàng"
                keyboardType="numeric"
                value={totalWeight.toString()}
                onChangeText={(text: string) => {
                  setTotalWeight(Number(text)); // Chuyển đổi chuỗi thành số và cập nhật state
                }}
              />
            </View>
            <Text style={styles.title}>
              Tổng tiền
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View style={styles.weightOfPackage}>
              <TextInput
                placeholder="Vui lòng nhập tổng số tiền"
                keyboardType="numeric"
                value={totalPrice.toString()}
                onChangeText={(text: string) => {
                  setTotalPrice(Number(text)); // Chuyển đổi chuỗi thành số và cập nhật state
                }}
              />
            </View>
            <Text style={styles.title}>
              Ghi chú
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View style={styles.note}>
              <TextInput
                placeholder="Vui lòng nhập ghi chú"
                multiline
                value={note}
                onChangeText={(text: string) => {
                  setNote(text); // Chuyển đổi chuỗi thành số và cập nhật state
                }}
              />
            </View>
            <Text style={styles.title}>
              Hình ảnh
              {/* <Text style={styles.isRequired}>*</Text> */}
            </Text>
            <View>
              {response?.assets &&
                response?.assets.map(({uri}: {uri: string}) => (
                  <View key={uri} style={styles.imageContainer}>
                    <Image
                      resizeMode="cover"
                      resizeMethod="scale"
                      style={styles.image}
                      source={{uri: uri}}
                    />
                  </View>
                ))}
              {!response?.assets && (
                <TouchableOpacity
                  style={styles.iconAddImage}
                  onPress={() =>
                    onButtonPress('capture', {
                      saveToPhotos: true,
                      mediaType: 'photo',
                      includeBase64: true,
                      includeExtra,
                    })
                  }>
                  <MaterialCommunityIcons name="plus-circle" size={80} />
                  <Text>Vui lòng chọn ảnh</Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <ButtonComponent
          colorButton="#4BA2B6"
          buttonText="Tạo đơn"
          style={{marginBottom: 10}}
          onPress={() => submitHandle()}
        />
      </SafeAreaView>
      <ModalBottomSearchComponent
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onSelectStation={handleSelectStation}
      />
      <ModalBottomSearchBusComponent
        visible={isSelectionBus}
        onCancel={() => setIsSelectionBus(false)}
        onSelectStation={handleSelectBus}
      />

      {visibleDateTimePicker && (
        <DatePicker
          onCancel={() => setVisibleDateTimePicker(false)}
          onConfirm={confirmDateHandler}
          value={moment(selectedDate, 'DD-MM-YYYY').format('YYYY-MM-DD')}
        />
      )}
    </>
  );
};

export default CreateOrderScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  isRequired: {
    color: 'red',
  },
  labelSearch: {
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 8,
  },
  text: {
    fontSize: 18,
  },
  numOfItemContainer: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  icon: {
    flexDirection: 'row',
  },
  weightOfPackage: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  note: {
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  imageContainer: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconAddImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
  },

  image: {
    height: 200,
    width: '100%',
  },
});
