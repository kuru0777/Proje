import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const MyAppbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAuthScreen = route.name === 'AuthScreen';

  return (
    <Appbar.Header style={{ backgroundColor: '#CC0000' }}>
      <Appbar.Action icon="food" iconColor="white" />
      <Appbar.Content title="ACIKTIM" color="#FFFFFF" />
      {isAuthScreen ? (
        <Appbar.Action
          icon="logout" 
          iconColor="white"
          onPress={() => {
            navigation.navigate('Home'); 
            setIsLoggedIn(true);
          }}
        />
      ) : (
        <Appbar.Action
          icon="login" 
          iconColor="white"
          onPress={() => {
            navigation.navigate('AuthScreen'); 
            setIsLoggedIn(false);
          }}
        />
      )}
    </Appbar.Header>
  );
};

export default MyAppbar;