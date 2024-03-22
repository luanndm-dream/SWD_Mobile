import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomModal from './CustomModal';
import ButtonComponent from './ButtonComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getOfficeApi} from 'src/api/get_office_api';
import {styleGobal} from '@/styles';
import useLoading from 'src/hook/useLoading';
import {getBusApi} from 'src/api/get_bus_api';

interface ModalBottomSearchProps {
  onConfirm?: Function;
  onCancel?: () => void;
  visible?: boolean;
  onSelectStation?: (busId: number, busName: string) => void;
}

const ModalBottomSearchComponent: React.FC<ModalBottomSearchProps> = ({
  onConfirm,
  onCancel,
  visible,
  onSelectStation,
}) => {
  const [dataBus, setDataBus] = useState<any>();
  const [searchValue, setSearchValue] = useState<string>('');
  const {showLoading, hideLoading} = useLoading();
  useEffect(() => {
    showLoading();
    getBusApi().then((res: any) => {
      if (res?.statusCode === 200) {
        setDataBus(res.data.items);
        hideLoading();
      }
    });
  }, []);
  const filterData = (data: any[], query: string) => {
    if (!query) return data;
    return data.filter((item: any) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
  };
  const onPressItem = (itemId: number, itemName: string) => {
    setSearchValue(itemName);
    onSelectStation && onSelectStation(itemId, itemName);
    onCancel?.();
  };
  return (
    <CustomModal
      onBackDropPress={() => {
        onCancel?.();
      }}
      visible={visible}
      animationType="slide">
      <View
        style={{
          backgroundColor: 'white',
          bottom: 0,
          flex: 1,
          position: 'absolute',
          width: '100%',
          borderRadius: 10,
        }}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.indicatorTop} />
          <View style={styles.labelSearch}>
            <TextInput
              placeholder="Tìm xe BUS"
              onChangeText={text => setSearchValue(text)}
              value={searchValue}
            />
            <MaterialCommunityIcons name="chevron-down" size={30} />
          </View>
          <SafeAreaView style={[styleGobal.androidSafeArea]}>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={filterData(dataBus, searchValue)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => onPressItem(item.id, item.name)}>
                    <Text style={styles.itemText}>
                      {item.id} - {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()} // Thêm keyExtractor nếu chưa có
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: 'gray'}} />
              )} // Thêm ItemSeparatorComponent nếu cần
              getItemLayout={(data, index) => ({
                length: 50, // Chiều cao cố định của mỗi mục, thay 50 bằng chiều cao mong muốn
                offset: 51 * index, // 50 là chiều cao mỗi mục, 1 là chiều cao của phần phân tách giữa mỗi mục
                index,
              })}
            />
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
      <View style={{paddingHorizontal: 13, paddingVertical: 10}}>
        <ButtonComponent
          buttonText="Chọn"
          style={{flex: 1}}
          colorButton="#4BA2B6"
          onPress={() => {
            onConfirm?.();
          }}
        />
      </View>
    </CustomModal>
  );
};

export default ModalBottomSearchComponent;

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
  labelSearch: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  indicatorTop: {
    width: 60,
    height: 6,
    backgroundColor: '#eaeaea',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  item: {
    flex: 1,
    paddingHorizontal: 12,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
