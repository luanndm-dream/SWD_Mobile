import {StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeaderComponent} from '@/components';
import {styleGobal} from '@/styles';
import { useNavigation } from '@react-navigation/native';

const CompanyInformationScreen: React.FC = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView>
      <HeaderComponent headerTitle="Thông tin công ty" iconName='chevron-left' onPressIcon={()=>{navigate.goBack()}}/>
   
        <View style={styles.container}>
          <View style={styles.banner}>
            <View style={styles.header}>
            <Image
              source={require('../assets/image/bus.png')}
              style={styles.image}
            />
            <Text style={styles.textHeader}>Bus Deliverty</Text>
            </View>
            <View style ={styles.textContentBox}>
            <Text  style ={styles.textContent}>Sản phẩm được phát triển bởi Công Ty Cổ Phần Công Nghệ <Text style={{fontWeight: 'bold'}}>NothingTech</Text></Text>
            </View>
           
            <TouchableOpacity>
              <Text style={styles.conditionText}>Điều kiện bảo mật</Text>
            </TouchableOpacity>
          </View>
        </View>

    </SafeAreaView>
  );
};

export default CompanyInformationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecebeb',
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 32,
    color: '#4BA2B6',
    marginLeft:  15
  },
  textContent: {
    fontSize: 18,
    paddingVertical: 12,

  },
  textContentBox: {
  
    borderBottomWidth: 1
  },
  image: {
    width: 80,
    height: 80,
  },
  banner:{
    padding: 10,
    backgroundColor: '#FAFAFA',
    height: 200,
    marginTop: 12,
    borderRadius: 12
  },
  conditionText:{
    fontSize: 18,
    fontStyle: 'italic',
    paddingTop: 8,
    fontWeight: 'bold',
    color: '#51B6FF'
  }
});
