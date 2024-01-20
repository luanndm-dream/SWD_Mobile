import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
interface ButtonComponentProps {
    onPress: () => void,
    buttonText: string
}
const ButtonComponent : React.FC<ButtonComponentProps> = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4BA2B6',
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
    }
})