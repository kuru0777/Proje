import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const AuthScreen = () => {

  const navigation = useNavigation();
  const handleButtonClick = () => {
    navigation.navigate('Home');
  };

  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleLogin = () => {
    // Kullanıcıdan alınan email ve şifreyi kullanarak giriş yapmayı dene.
    const User = {
      email: email, // Kullanıcı e-posta adresi
      password: password, // Kullanıcı şifresi
    };
  
    // Kullanıcıyı giriş yapmaya çalışan bir API çağrısı veya veritabanı sorgusu yapılması gerekecek.
    // Örnek bir axios API çağrısı:
    axios.post('http://10.0.2.2:3000/users/', User)
      .then((response) => {
        // Giriş başarılı olduysa, kullanıcıyı ana sayfaya yönlendirin veya başka bir işlem yapın.
        navigation.navigate('Home');
      })
      .catch((error) => {
        // Giriş başarısızsa, hata mesajını kullanıcıya gösterin veya başka bir işlem yapın.
        console.error('Giriş başarısız:', error);
      });
  };

  const handleRegister = () => {
    // Kullanıcıdan alınan bilgileri kullanarak kayıt olmayı dene.
    const User = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      address: address,
    };
  
    // Kullanıcıyı kaydetmeye çalışan bir API çağrısı veya veritabanı sorgusu yapılması gerekecek.
    // Örnek bir axios API çağrısı:
    axios.post('http://10.0.2.2:3000/users', User)
      .then((response) => {
        // Kayıt başarılı olduysa, kullanıcıyı ana sayfaya yönlendirin veya başka bir işlem yapın.
        navigation.navigate('Home');
      })
      .catch((error) => {
        // Kayıt başarısızsa, hata mesajını kullanıcıya gösterin veya başka bir işlem yapın.
        console.error('Kayıt başarısız:', error);
      });
  };
  

  return (
    <View style={styles.container}>
      <Image
        source={require('./logohamburger.webp')}
        style={{width: 100, height: 100, alignSelf: 'center'}}
      />
      <Text style={styles.title}>Acıktım Mobil</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => setIsLogin(true)}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.redButton}
          onPress={() => setIsLogin(false)}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        {isLogin ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              secureTextEntry
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.submitButton} onPress={
  handleLogin
            }>
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Ad"
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Soyad"
              onChangeText={setSurname}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              secureTextEntry
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Tekrar Şifre"
              secureTextEntry
              onChangeText={setConfirmPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Adres"
              onChangeText={setAddress}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleRegister}>
              <Text style={styles.submitButtonText}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  redButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthScreen;
