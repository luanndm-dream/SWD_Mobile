import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
    headerTitle: String,
    otherProp?: any
    iconName?: any
    onPressIcon?: () => void
}
const HeaderComponent : React.FC<HeaderProps> = (props: HeaderProps) => {
 

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.onPressIcon} style={styles.icon} >
            <MaterialCommunityIcons name={props.iconName} size={40} color='white' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.headerTitle}</Text>
    </View>
  )
}

export default HeaderComponent
const styles = StyleSheet.create({
    container: {
        height:  67,
        backgroundColor: '#4BA2B6',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // Thử thay đổi flex-direction sang 'row' hoặc 'column' để xem kết quả
    },
    icon: {
       position: 'absolute',
       left: 15
    //    alignSelf: 'center'
    },
    headerTitle : {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})
