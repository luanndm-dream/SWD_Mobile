import {StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent} from 'react-native';
import React from 'react';

interface DualButtonComponentProps {
  textLeft: string;
  textRight: string;
  iconLeft?: any;
  iconRight?: any;
  onPressLeft?: any;
  onPressRight?:any; 
  styleButtonLeft? : any,
  styleButtonRight? : any,
  styleTextLeft? : any,
  styleTextRight? : any,
}

const DualButtonComponent: React.FC<DualButtonComponentProps> = ({
  textLeft,
  textRight,
  onPressLeft,
  onPressRight,
  styleButtonRight,
  styleButtonLeft,
  styleTextRight,
  styleTextLeft
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeft} style={[styles.containerLeft, styleButtonLeft]}>
        <Text style={[styles.textButton, {color: '#E14337'}, styleButtonLeft]}>{textLeft}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRight} style={[styles.containerRight,styleButtonRight ]}>
        <Text style={[styles.textButton, {color: '#FFFFFF'}, styleButtonRight]}>{textRight}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DualButtonComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerLeft: {
    width: '40%',
    height: 45,
    borderRadius: 8,
    backgroundColor: '#FCEEED',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  containerRight: {
    width: '40%',
    height: 45,
    borderRadius: 8,
    backgroundColor: '#366AE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
