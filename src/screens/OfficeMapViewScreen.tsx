import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OfficeMapViewScreen = () => {
  const route = useRoute<any>();
  const dataOffice = route.params.dataOffice;
  const navigation = useNavigation<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 1,
    longitude: 2,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  });
  useEffect(() => {
    if (dataOffice?.length > 0) {
      const currentMarker = dataOffice[currentIndex];
      setInitialRegion({
        latitude: parseFloat(currentMarker.lat),
        longitude: parseFloat(currentMarker.lng),
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
  }, [dataOffice, currentIndex]);
  
  // console.log(dataOffice);
  const changeInitialRegion = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= dataOffice.length) {
      nextIndex = 0;
    }
    setCurrentIndex(nextIndex);
  };

  const createPackage = (officeId: number, officeName: string) => {
    navigation.navigate('CreateOrderScreen', {
      dataOffice: {
        officeId,
        officeName,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={initialRegion}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          }}>
          {/* Hiển thị Marker tại vị trí của phần tử hiện tại */}
          {dataOffice?.map((marker:any, index:any) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(marker.lat),
                longitude: parseFloat(marker.lng),
              }}>
              <Text
                style={
                  styles.markerCustom
                }>{`Văn phòng: ID ${dataOffice[currentIndex]?.id} - ${dataOffice[currentIndex]?.name}`}</Text>
                 <Image source={require('../assets/image/building.png')} style={{width: 60, height: 60}}/>
            </Marker>
          ))}
        </MapView>
      </View>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="chevron-left" size={50} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={changeInitialRegion}>
          <Text style={styles.buttonText}>Xem văn phòng khác</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.createOrderButton]}
          onPress={() =>
            createPackage(
              dataOffice[currentIndex]?.id,
              dataOffice[currentIndex]?.name,
            )
          }>
          <Text style={styles.buttonText}>Tạo đơn hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OfficeMapViewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mapContainer: {
    flex: 1,
    zIndex: 0,
  },
  map: {
    flex: 1,
  },
  iconBack: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  createOrderButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  markerCustom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
