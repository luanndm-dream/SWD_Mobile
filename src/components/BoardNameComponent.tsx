import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styleGobal } from '@/styles'
interface BoardNameProps {
    name?: string,
    code?: string,
    position?: string,
    avatarUrl?: any
}
const BoardNameComponent : React.FC <BoardNameProps> = (props) => {
    const {name, code, position, avatarUrl, ...otherProps} = props
  return (
    <View style = {styles.container}>   
    <Image source={avatarUrl}  style={styles.avatar}/>
      <View style={[styles.content, styleGobal.boxShadow]}>
            <Text style={styles.textContent}>{name} - {code}</Text>
            <Text>{position}</Text>
      </View>
  
    </View>
  )
}

export default BoardNameComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 164,
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 45,
        alignSelf: 'center',
        zIndex: 2,
        position: 'absolute',
        top: -45
    },
    content:{
        height: 127,
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12
    }
})