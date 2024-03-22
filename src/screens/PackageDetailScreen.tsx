import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styleGobal} from '@/styles';
import {
  ButtonComponent,
  DualButtonComponent,
  HeaderComponent,
  ListDetailPackageItem,
  PopupComponent,
} from '@/components';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { deletePackageById } from 'src/api/delete_package_api';
import useLoading from 'src/hook/useLoading';

const PackageDetailScreen: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const {showLoading, hideLoading} = useLoading();
  const [popupVisible, setPopupVisible] = useState<any>(false);
  const [typeButton, setTypeButton] = useState<string>('left');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [allFieldsValid, setAllFieldsValid] = useState<boolean>(false);
  const {
    id,
    busId,
    fromOfficeId,
    stationId,
    quantity,
    totalWeight,
    totalPrice,
    image,
    note,
    status,
    createTime,
  } = route.params.data || route.params.dataFromNoti;
  const [packageInfo,setPackageInfo] = useState([
    {
      label: 'Mã đơn hàng',
      value: id.toString(),
      isLastValue: false,
    },
    {
      label: 'Cân nặng(kg)',
      value: totalWeight.toString(),
      isLastValue: false,
    },
    {
      label: 'Từ trạm',
      value: fromOfficeId.toString(),
      isLastValue: false,
    },
    {
      label: 'Thời gian',
      value: createTime.toString(),
      isLastValue: false,
    },
    {
      label: 'Mã số xe',
      value: busId.toString(),
      isLastValue: false,
    },
    {
      label: 'Ghi chú',
      value: note.toString(),
      isLastValue: false,
    },
    {
      label: 'Tổng tiền',
      value: totalPrice.toString(),
      isLastValue: false,
    },
    {
      label: 'Hình ảnh',
      imageUrl: image,
      isImage: true,
      isLastValue: true,
    },
  ]);

  const getStyle = (status: any) => {
    switch (status) {
      case -1:
        return {
          backgroundColor: '#FCEEED',
          color: '#E14337',
          iconName: 'close-circle',
        };
      case 0:
        return {
          backgroundColor: '#FFF3EB',
          color: '#FC6B03',
          iconName: 'progress-clock',
        };
      default:
        return {
          backgroundColor: '#E8F7EF',
          color: '#5FBC89',
          iconName: 'check-circle',
        };
    }
  };
  const {backgroundColor, color, iconName} = getStyle(status);

  const onPressButton = (type: string) => {
    setTypeButton(type);
    setPopupVisible(true);
  };
  const onDelete = (id: string) => {
    showLoading()
    deletePackageById(id).then((res)=>{
      console.log('Delete success', res),
      hideLoading()
      setPopupVisible(false)
    })
  }

  const onEit = (id?: string) =>{
    setIsEdit(!isEdit)
    setPopupVisible(false)
  }

  const onPressBackIcon = () => {
    navigation.goBack();
  };
  const onEditHandle = () => {

      console.log('edit Success');
      setIsEdit(false);
  
  }
  const onSubmitEdit = (values: any) => {
    // Xử lý dữ liệu từ component con ở đây
    console.log("Submitted values:", values);
  };
  const handleValueChange = (label: string, newValue: any) => {
    // Tìm và cập nhật giá trị mới cho label tương ứng
    setPackageInfo((prevPackageInfo) =>
      prevPackageInfo.map((item) =>
        item.label === label ? { ...item, value: newValue } : item
      )
    );
  };
  useEffect(()=>{
    console.log(packageInfo[2])
  },[packageInfo, onEditHandle])

  return (
    <>
      <HeaderComponent
        headerTitle={`#${id}`}
        iconName="chevron-left"
        onPressIcon={onPressBackIcon}
      />
      <View style={styles.container}>
        <SafeAreaView style={styleGobal.androidSafeArea}>
          <View style={[styles.lableTop, {backgroundColor: backgroundColor}]}>
            <MaterialCommunityIcons name={iconName} size={24} color={color} />
            <Text style={[styles.textLabel, {color: color}]}>
              {status === 1
                ? 'Hoàn thành'
                : status === 0
                ? 'Đang xử lý'
                : 'Bị huỷ'}
            </Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={packageInfo}
            renderItem={({item}) => {
              return (
                <>
                  <ListDetailPackageItem
                    label={item?.label}
                    value={item?.value}
                    isLastItem={item.isLastValue}
                    imageUrl={item.imageUrl}
                    isImage={item.isImage}
                    isEdit={isEdit}
                    onSubmit={onSubmitEdit}                  />
                </>
              );
            }}
          />
          
          {/* {status === -1 && isEdit === false ? (
            <>
            <View style={styles.dualButton}>
              <DualButtonComponent
                textLeft="Xoá đơn"
                textRight="Chỉnh sửa"
                onPressLeft={() => onPressButton('left')}
                onPressRight={() => onPressButton('right')}
              />
            </View>
            </>
            
          ): <ButtonComponent buttonText='Chỉnh sửa' style={{backgroundColor: '#366AE2', marginBottom: 20}} onPress={()=>onEditHandle()}/>} */}
        </SafeAreaView>
        {popupVisible && (
          <PopupComponent
            style={styles.popup}
            isVisible={popupVisible}
            onCancel={() => setPopupVisible(false)}
            content={
              typeButton === 'left'
                ? 'Đơn sẽ bị xoá hoàn toàn, bạn có chắc chắn xoá?'
                : 'Bạn có chắn chắn muốn chỉnh sửa?'
            }
            iconName={typeButton === 'left' ? 'alert-circle' : 'help-circle'}
            color={typeButton === 'left' ? '#FF0909' : '#366AE2'}
            title={
              typeButton === 'left'
                ? 'Xoá đơn khỏi hệ thống?'
                : 'Chỉnh sửa đơn?'
            }
            onEdit={()=>onEit()}
            onDelete={()=>onDelete(id)}
          />
        )}
      </View>
    </>
  );
};

export default PackageDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  lableTop: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
  },
  dualButton: {
    marginVertical: 10,
  },
  popup: {
    zIndex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    top: '40%',
    width: '90%',
    alignSelf: 'center',
  },
});
