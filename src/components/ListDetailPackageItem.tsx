import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';

interface ListDetailPackageItemProps {
  label: string;
  value: any;
  imageUrl?: string;
  isLastItem?: boolean;
  isImage?: boolean;
  isEdit?: boolean;
  onValueChange?: (label: string, newValue: any) => void;
  onSubmit?: (values: any) => void;
}

const ListDetailPackageItem: React.FC<ListDetailPackageItemProps> = ({
  label,
  value,
  isLastItem,
  isImage,
  imageUrl,
  isEdit,
  onSubmit,
  onValueChange,
}) => {
  const onChangeText = () => {};

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderBottomWidth: isLastItem ? undefined : 1,
            borderBottomColor: '#7D95B4',
          },
        ]}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.valueContainer}>
          <Formik
            initialValues={{value: value}}
            onSubmit={values => {
              console.log(values);
          
              // if (onSubmit) {
              //   onSubmit(values);
              // }
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <TextInput
                  editable={isEdit ?? false}
                  style={styles.value}
                  // onChangeText={newValue => onValueChange(label, newValue)} // Gọi hàm onValueChange khi giá trị thay đổi
                  onBlur={handleBlur('value')}
                  value={values.value}
                />

                {isEdit && !isLastItem && (
                  <MaterialCommunityIcons name="pencil" size={20} />
                )}
              </>
            )}
          </Formik>
        </View>
      </View>
      {isImage && (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `data:image/jpeg;base64,${imageUrl}`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}
    </>
  );
};

export default ListDetailPackageItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D95B4',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 170,
    width: 350,
    borderRadius: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
