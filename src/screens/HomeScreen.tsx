// @ts-ignore
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Platform,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import styleGobal from 'styles/styleGobal'

import {SearchComponent, IconFunctionComponent} from '@/components';
import {dataMainFunction,dataSmartFunction} from '@/data';


// import { styleGobal } from 'styles'

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View>
          <ImageBackground
            source={require('../assets/image/78787.jpg')}
            style={{width: '100%', height: '100%'}}>
            <View style={styles.welcome}>
              <Text style={styles.welcomeText}>Xin chào,</Text>
              <Text style={styles.nameText}>Nguyen</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{flex: 2, marginHorizontal: 8}}>
        <View>
          <SearchComponent />
          <View>
            <Text style={styles.title}>Chức năng chính</Text>
            <FlatList
             scrollEnabled={false}
            numColumns={3}
              data={dataMainFunction}
              renderItem={({item}) => {
                console.log('data', item.imgName, item.name);
                return (
                  <View style={styles.dataGridView}>
                    <IconFunctionComponent
                      name={item.name}
                      imgUrl={item.imgName}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Chức năng thông minh</Text>
            <FlatList
            scrollEnabled={false}
            numColumns={3}
              data={dataSmartFunction}
              renderItem={({item}) => {
                console.log('data', item.imgName, item.name);
                return (
                  <View style={styles.dataGridView}>
                    <IconFunctionComponent
                      name={item.name}
                      imgUrl={item.imgName}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  containerIcon: {
 
  },
  dataGridView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  name: {
    fontSize: 14,
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
