import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styleGobal} from '@/styles';
import {DateTimePickerComponent} from '@/components';
import DatePicker from 'src/components/DatePicker';
import { isEmpty } from 'src/utils/validation';
import moment from 'moment';

const NoProcess = () => {
  const [visible, setVisile] = useState(false);
  const [dateOutput, setDateOutput] = useState<string>('');
  const onPressDatePicker = () => {
    setVisile(true);
  };
  const confirmDateHandler = (dateOutput:string) =>{
    setDateOutput(dateOutput);
    console.log(dateOutput)
    setVisile(false);
  }
  return (
    <>
      <SafeAreaView style={styleGobal.androidSafeArea}>
        <View style={styles.topContainer}>
          <DateTimePickerComponent
            text={isEmpty(dateOutput)? 'Từ ngày' : dateOutput }
            isRequired={true}
            onPress={onPressDatePicker}
          />
        </View>
      </SafeAreaView>
      {visible && (
        <DatePicker
          onCancel={() => setVisile(false)}
          onConfirm={confirmDateHandler}
          value={dateOutput}
        />
      )}
    </>
  );
};

export default NoProcess;

const styles = StyleSheet.create({
  topContainer: {
    height: 161,
    width: '95%',
    //  paddingHorizontal: 190,
    backgroundColor: '#E4E4E4',
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
