import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GestureResponderHandlers } from 'react-native';
interface DateTimePickerProps extends TouchableOpacityProps {
    text: any;
    isRequired?: boolean;
    onPress?: () =>void,
    style?: any
}
const DateTimePickerComponent : React.FC<DateTimePickerProps> = ( {isRequired,text,onPress, style}) => {




  return (
   <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
       <Text style={styles.text}>
           {text} {isRequired? <Text style={styles.isRequired}>*</Text> : undefined }
       </Text>
    <MaterialCommunityIcons name='calendar' size={20}/>
   </TouchableOpacity>
  )
}

export default DateTimePickerComponent

const styles = StyleSheet.create({
    container:{
        // width: 151, 
        height: 47,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1
    },
    text: {
        fontSize: 15,
    },
    isRequired: {
        color: 'red',
        
      }
})