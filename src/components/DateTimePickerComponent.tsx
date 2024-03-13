import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface DateTimePickerProps {
    text: String | boolean,
    isRequired?: Boolean 
    onPress?: ()=> void
}

const DateTimePickerComponent : React.FC<DateTimePickerProps> = ( {isRequired,text,onPress}) => {




  return (
   <TouchableOpacity onPress={onPress} style={styles.container}>
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
        width: 151, 
        height: 47,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    text: {
        fontSize: 15,
    },
    isRequired: {
        color: 'red',
        
      }
})