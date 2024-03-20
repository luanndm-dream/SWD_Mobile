import {Image, StyleSheet, Text, View, TouchableOpacity,TextInput} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ListDetailPackageItemProps {
  label: string;
  value: string;
  imageUrl?: string;
  isLastItem?: boolean;
  isImage?: boolean;
  isEdit?: boolean;
}
const ListDetailPackageItem: React.FC<ListDetailPackageItemProps> = ({
  label,
  value,
  isLastItem,
  isImage,
  imageUrl,
  isEdit,
}) => {
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
          <TextInput editable={isEdit? true : false} style={styles.value}>{value}</TextInput>
          {isEdit &&<MaterialCommunityIcons name="pencil" size={20} /> }
          
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
    marginVertical: 17,
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
  },
});
