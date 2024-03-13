import {StyleSheet, Platform} from 'react-native';
export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 12,
    // backgroundColor: '#FFFFFF',
  },
  contentArea: {
    flex: 1,

    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  boxShadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
        }
      : {
          elevation: 5,
        },
});
