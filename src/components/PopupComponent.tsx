import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomModal from './CustomModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DualButtonComponent from './DualButtonComponent';
interface PopupComponentProps {
  isVisible: boolean;
  onCancel?: any;
  style?: any;
  iconName: string;
  title: string;
  content: string;
  color?: any;
  onDelete? : any,
  onEdit? : any
}
const PopupComponent: React.FC<PopupComponentProps> = ({
  isVisible,
  onCancel,
  style,
  iconName,
  title,
  content,
  color,
  onDelete,
  onEdit
}) => {
  return (
    <View style={[styles.container]}>
      <CustomModal visible={isVisible} onBackDropPress={onCancel}>
        <View style={[styles.containerModal, style]}>
          <MaterialCommunityIcons
            name={iconName}
            color={color}
            size={60}
            style={styles.icon}
          />
          <Text style={styles.title}>{title}</Text>
          <Text
            style={[
              styles.content,
              title === 'Xoá đơn khỏi hệ thống?'
                ? {color: '#612B2B'}
                : {color: '#366AE2'},
            ]}>
            {content}
          </Text>
          <View>
            <DualButtonComponent
              textLeft="Đóng"
              textRight={
                title === 'Xoá đơn khỏi hệ thống?' ? 'Xoá đơn' : 'Chỉnh sửa'
              }
              styleButtonLeft={styles.buttonLeft}
              styleButtonRight={title === 'Xoá đơn khỏi hệ thống?' ? {backgroundColor: '#FF0909'} : null}
              styleTextLeft={styles.buttonLeft} 
              onPressLeft={onCancel} 
              onPressRight={ title === 'Xoá đơn khỏi hệ thống?' ? onDelete : onEdit}
            />
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default PopupComponent;

const styles = StyleSheet.create({
  container: {},
  containerModal: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10
  },
  buttonLeft:{
    color: '#5E5E5E',
    backgroundColor: '#D9D9D9'
  },
});
