  import { TextInput, StyleSheet, View,Keyboard } from 'react-native';
  import React from 'react';

  interface TextInputComponentProps {
    onChangeText : (text: string ) => void
    secureTextEntry?: boolean; 
    
  }
  const TextInputComponent: React.FC<TextInputComponentProps> = ({ onChangeText, ...props }) => {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={onChangeText} style={styles.input} {...props}  />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 8,
      height: 45,
      backgroundColor: '#F6F6F6',
    },
    input: {
      flex: 1,
      padding: 10,
    },
  });
