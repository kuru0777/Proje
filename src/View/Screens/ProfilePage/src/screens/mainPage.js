import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/apis/userApi';
import { setUser } from '../redux/slicers/userSlicer';
import axios from 'axios';
import { Button, TextInput } from 'react-native-paper';

const MainPage = () => {
  const userr = '650f914a8add957e9c8d9aaf';
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(userr));
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    address: '',
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    dispatch(getUser(userr));
  };

  const handleButtonPress = () => {
    const userId = '650f914a8add957e9c8d9aaf';

    axios
      .patch(`http://10.0.2.2:3000/users/${userId}`, newUserData)
      .then((response) => {
        console.log('Kullanıcı güncellendi:');
        toggleModal();
      })
      .catch((error) => {
        console.error('Güncelleme hatası:', error);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.border}>
        <Text style={{ fontSize: 40, marginBottom: 43 }}>Profil</Text>
        <Card item="İsim:" />
        <Card item="Soyisim:" />
        <Card item="Email:" />
        <Card item="Şifre:" />
        <Card item="Adres" />
      </View>
      <View style={styles.borders}>
        <Card item={user?.name} />
        <Card item={user?.surname} />
        <Card item={user?.email} />
        <Card item={user?.password} />
        <Card item={user?.address} />
        <Button title="Güncelle" onPress={toggleModal} mode="contained" style={styles.button}>
          Güncelle
        </Button>
        {modalVisible && (
          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modal}>
              <Image source={require('../images/1.png')} style={{ height: 200, width: 200 }} />
              <TextInput
                left={<TextInput.Icon icon={'account-edit'} />}
                style={styles.input}
                placeholder={user?.name}
                value={newUserData.name}
                onChangeText={(text) => setNewUserData({ ...newUserData, name: text })}
              />
              <TextInput
                left={<TextInput.Icon icon={'text-account'} />}
                style={styles.input}
                placeholder={user?.surname}
                value={newUserData.surname}
                onChangeText={(text) => setNewUserData({ ...newUserData, surname: text })}
              />
              <TextInput
                left={<TextInput.Icon icon={'email-edit-outline'} />}
                style={styles.input}
                placeholder={user?.email}
                value={newUserData.email}
                onChangeText={(text) => setNewUserData({ ...newUserData, email: text })}
              />
              <TextInput
                left={<TextInput.Icon icon={'lock'} />}
                style={styles.input}
                placeholder={user?.password}
                value={newUserData.password}
                onChangeText={(text) => setNewUserData({ ...newUserData, password: text })}
              />
              <TextInput
                left={<TextInput.Icon icon={'map-marker'} />}
                style={styles.input}
                placeholder={user?.address}
                value={newUserData.address}
                onChangeText={(text) => setNewUserData({ ...newUserData, address: text })}
              />
              <Button
                title="Güncelle"
                onPress={handleButtonPress}
                style={styles.button}
                mode="contained"
              >
                Güncelle
              </Button>
              <Button title="Geri" onPress={toggleModal} style={styles.button} mode="contained">
                Geri
              </Button>
              <Text>Bilgilerinizi değiştirmek için yazıp güncelleye tıklayınız</Text>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};

function Card(props) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.text}>{props.item}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  card: {
    backgroundColor: '#C08261',
    width: 170,
    height: 50,
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 10,
    marginBottom: 30,
  },
  border: {
    flex: 1,
    flexDirection: 'column',
    height: 700,
    marginBottom: 65,
  },
  borders: {
    flex: 1,
    flexDirection: 'column',
    height: 700,
    marginTop: 125,
  },
  text: {
    color: 'white',
  },
  modal: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 110,
    marginTop: 10,
  },
  input: {
    width: 200,
    height: 50,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: '#C08261',
  },
  button: {
    backgroundColor: '#CC0000',
    marginBottom: 10,
    marginTop: 10,
    width: 170,
    marginLeft: 18,
  },
});

export default MainPage;
