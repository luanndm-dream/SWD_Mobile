import React from 'react';
import { View, Text, TouchableOpacity, Image, GestureResponderEvent } from 'react-native';
import { StyleSheet } from 'react-native';

interface IconFuncProp {
  name: string | any;
  imgUrl: string | any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const IconFunctionComponent: React.FC<IconFuncProp> = ({ name, imgUrl ,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image source={imgUrl} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default IconFunctionComponent;

const styles = StyleSheet.create({
  container: {
  justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 120,

  },
  iconContainer: {
    backgroundColor: '#E0F4F9',
    borderRadius: 35,
    
  },
  image: {
    width: 70,
    height: 70,

  },
  name: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
