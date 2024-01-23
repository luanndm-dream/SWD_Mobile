import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Loupe from '@/icons/loupe.svg';


interface SearchProps {
    propStyle?: any; 
  }
  

const SearchComponent: React.FC<SearchProps> = ({propStyle}) => {
  return (
    <TouchableOpacity style={[styles.container,propStyle]}>
        <View style={styles.content}>
        <Loupe width={30} height={30} style={styles.icon} />
        <Text style={styles.textContent} >Vui lòng chọn nơi giao hàng!</Text>
        </View>
      

    </TouchableOpacity>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        height: 45,
        justifyContent: 'center',
        borderRadius: 8,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 5
            },
          }),
    },
    icon:{
        marginLeft: 13
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContent: {
        fontSize: 16,
        marginLeft: 20
    }
})