import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styleGobal from '../styles/styleGobal';
// import TextInputComponent from '@components/TextInputComponent';
// import {ButtonComponent, TextInputComponent} from '@components';
import CheckBox from '@react-native-community/checkbox';
import { ButtonComponent, TextInputComponent } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppSelector } from '@/redux/reduxHook';

const LoginScreen: React.FC = () => {
  const [userName, setUserName] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [toogle, setToggle] = useState<boolean>(false);
  const accessToken = useAppSelector((state) => state.user.accessToken)

  const storeData = async (value: String)=> {
    try {
      await AsyncStorage.setItem('isLogged', JSON.stringify(value))
      console.log('Store Success', value)
    } catch (error) {
      console.log('ERROR LOCAL STORAGE', error)
    }
  }

  const handleLogin = () =>{
    storeData('true')
  }


  return (
    <SafeAreaView
      onTouchStart={() => Keyboard.dismiss()}
      style={styleGobal.droidSafeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.busTitle}>BUS DELIVERY</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/image/truck.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.title}>Username</Text>
            <TextInputComponent onChangeText={setUserName} />
          </View>
          <View>
            <Text style={styles.title}>Password</Text>
            <TextInputComponent
              onChangeText={setUserName}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.savePassword}>
            <CheckBox
              value={toogle}
              boxType="square"
              lineWidth={2}
              onValueChange={() => setToggle(!toogle)}
              style={{width: 18, height: 18, padding: 2}}
              onCheckColor={Platform.OS === 'ios' ? '#4BA2B6' : ''}
              animationDuration={1}
              onAnimationType={'bounce'}
              offAnimationType={'stroke'}
            />
            <Text style={styles.savePasswordText}>Save password</Text>
          </View>

          <View style={styles.button}>
            <ButtonComponent buttonText="Login" onPress={handleLogin} />
          </View>
          <View style={styles.forgotPassword}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flex: 5,
    marginTop: 26,
  },
  welcome: {
    fontSize: 20,
    color: '#BEC1C2',
  },
  busTitle: {
    fontSize: 24,
    color: '#A8EEFE',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#BEC1C2',
    marginTop: 22,
  },
  button: {
    marginTop: 20,
  },
  savePassword: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  savePasswordText :{
    marginLeft: 10
  },
  forgotPassword: {
    marginTop: 60,
    alignItems: 'center'
  },
  forgotPasswordText: {
    color: 'red',
    fontSize: 16
  }
});
