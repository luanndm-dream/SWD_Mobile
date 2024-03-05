import { View,Modal as RNModal, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CustomModal = (props :any) => {

    const { onBackdropPress, children, ...modalOtherProps } = props;
  return (
    <RNModal transparent animationType="fade" {...modalOtherProps}>
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>
      {children}
    </View>
  </RNModal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(55, 46, 52, 0.4)",
    },
    backdrop: {
      ...StyleSheet.absoluteFillObject,
    },
  });