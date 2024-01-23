import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';

interface IconFuncProp {
  name: string | any;
  imgUrl: string | any;
}

const IconFunctionComponent: React.FC<IconFuncProp> = ({ name, imgUrl }) => {
  return (
    <TouchableOpacity style={styles.container}>
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
  
    alignItems: 'center',
    width: 90,
    height: 120,
    margin: 10,

  },
  iconContainer: {
    backgroundColor: '#E0F4F9',
    borderRadius: 50,
    padding: 20,
  },
  image: {
    width: 40,
    height: 40,

  },
  name: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
