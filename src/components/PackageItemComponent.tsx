import {StyleSheet, Text, View,TouchableOpacity, GestureResponderEvent} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {formmatedDate} from 'src/utils/formattedDate';
import { orange100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
interface PackageItemProps {
  id?: string;
  imageUrl?: string;
  weight?: number;
  fromOfficeId?: number;
  createTime?: any;
  status?: number;
  onPress: ((event: GestureResponderEvent) => void) | undefined
}
const PackageItemComponent: React.FC<PackageItemProps> = ({
  id,
  imageUrl,
  weight,
  fromOfficeId,
  createTime,
  status,
  onPress
}) => {
  // const formatDate = formmatedDate(createTime)
  // const [datePart, timePart] = createTime?.split(' ');
  // const [hourMinuteSecond] = timePart.split(':');
  let statusPackage;
switch (status) {
  case -1: {
    statusPackage = 'Bị huỷ';
    break; // Thêm break ở cuối mỗi trường hợp
  }
  case 0: {
    statusPackage = 'Đang xử lý';
    break;
  }
  case 1: {
    statusPackage = 'Hoàn thành';
    break;
  }
  default: {
    statusPackage = 'Không xác định';
    break;
  }
}

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.label}>
          <Text style={styles.title}>Mã đơn hàng:</Text>
          <Text style={styles.item}>{id}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.title}>Cận nặng(kg):</Text>
          <Text style={styles.item}>{weight}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.title}>Từ trạm số:</Text>
          <Text style={styles.item}>{fromOfficeId}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.title}>Thời gian gửi:</Text>
          <Text style={styles.item}> {createTime}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image source={{uri: `${imageUrl}`}} style={styles.image} /> */}
        <Image
            source={{
              uri: `data:image/jpeg;base64,${imageUrl}`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        <Text style={{ color: status === 1 ? 'green' : status === 0 ? 'orange' : 'red' , fontSize: 18, fontWeight: 'bold'}}>{statusPackage}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PackageItemComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ECECEC',
    marginVertical: 10,
    borderRadius: 9},
  content:{
    padding: 8
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
  item: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});
