import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Appp = () => {
  useEffect(() => {
    // API'den tokeni al
    fetch('http://localhost:23427/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Diğer gereken başlıklar
      },
      body: JSON.stringify({
        // Gerektiğinde gövde verisi ekle
      }),
    })
      .then(response => response.json())
      .then(data => {
        const token = data.token; // API'den gelen token alanını al
        console.log('API Token:', token); // Tokeni konsola yazdır
      })
      .catch(error => {
        console.error('API Hatası:', error);
      });
  }, []);

  return (
    <View>
      <Text>API Tokeni Konsolda Kontrol Edin</Text>
    </View>
  );
};

export default Appp;
