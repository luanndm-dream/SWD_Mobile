import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ProfileItemProps {
  iconName?: any;
  title?: string;
  onPressIcon?: () => void;
  style?: any;
  isBox?: boolean;
  isLast?: boolean;
}

const ProfileItemComponent: React.FC<ProfileItemProps> = (props) => {
  const { iconName, title, onPressIcon, style, isBox, isLast, ...otherProps } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style, isBox &&  styles.isBoxStyle]}
      onPress={onPressIcon}>
      <MaterialCommunityIcons name={iconName} size={30} />
      <Text style={styles.textContent}>{title}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        style={{ marginLeft: 'auto' }}
        size={30}
      />
    </TouchableOpacity>
  );
};

export default ProfileItemComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecebeb',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 8,
    // borderRadius: 4,
  },
  textContent: {
    fontSize: 18,
    marginLeft: 24,
  },
  isBoxStyle: {
    borderRadius: 0,
    marginVertical: 10   
  },
 
});
