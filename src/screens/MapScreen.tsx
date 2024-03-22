import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native';

const MapScreen = () => {
  const route = useRoute<any>();
  const data = route.params.data;
  
  const navigation = useNavigation<any>();
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.007,
    longitudeDelta: 0.007,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (data.length > 0) {
      const currentMarker = data[currentIndex];
      setInitialRegion({
        latitude: parseFloat(currentMarker.lat),
        longitude: parseFloat(currentMarker.lng),
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
    console.log('init', initialRegion)
  }, [data, currentIndex]);

  const changeInitialRegion = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= data.length) {
      nextIndex = 0; // Quay trở lại vị trí của phần tử đầu tiên nếu đang ở phần tử cuối cùng
    }
    setCurrentIndex(nextIndex);
  };

  const createPackage = (stationId: number, stationName: string) => {
    navigation.navigate('CreateOrderScreen', {
      data: {
        stationId,
        stationName
      }
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          region={initialRegion}
          style={styles.map}
          initialRegion={initialRegion}>
          {/* Hiển thị Marker tại vị trí của phần tử hiện tại */}
          {data?.map((marker:any, index:any) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(marker.lat),
                longitude: parseFloat(marker.lng),
                
              }}
              style={{width: 200, height: 100}}
              title={`ID ${data[currentIndex]?.id}`}
              description={data[currentIndex]?.name}
              onPress={() => console.log('1')}>
              <Text
                style={
                  styles.markerCustom
                }>{`Trạm: ID ${data[currentIndex]?.id} - ${data[currentIndex]?.name}`}</Text>
                <Image source={require('../assets/image/bus-station.png')} style={{width: 60, height: 60}}/>
            </Marker>
          ))}
        </MapView>
      </View>
      <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name='chevron-left' size={50} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={changeInitialRegion}>
          <Text style={styles.buttonText}>Xem trạm khác</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.createOrderButton]}
          onPress={() =>
            createPackage(data[currentIndex]?.id, data[currentIndex]?.name)
          }>
          <Text style={styles.buttonText}>Tạo đơn hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapScreen;

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
