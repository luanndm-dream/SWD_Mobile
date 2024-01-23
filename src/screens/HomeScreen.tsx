// @ts-ignore
import { View, Text, SafeAreaView, StyleSheet, Image, Platform, ImageBackground } from 'react-native'
import React from 'react'
// import styleGobal from 'styles/styleGobal'
import { styleGobal } from '@/styles'
import {SearchComponent} from '@/components'

// import { styleGobal } from 'styles'




const HomeScreen : React.FC = () => {
  return (
 <SafeAreaView style={styles.container}>
    <View style={{flex:1 }}>
      <View >
        <ImageBackground source={require('../assets/image/78787.jpg')}style={{width: '100%', height: '100%'}}> 
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Xin chào,</Text>
          <Text style={styles.nameText}>Nguyen</Text>
        </View>
        </ImageBackground>
      </View>
    </View>
    <View style ={{flex: 2, marginHorizontal: 8}}>
      <View>
      <SearchComponent />
      </View>
     
    </View>
 </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 8
  },
  welcomeText:{
    fontSize : 16
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8
  },

})