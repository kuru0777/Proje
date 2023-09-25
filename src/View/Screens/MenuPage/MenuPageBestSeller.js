import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, ScrollView,  } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from './MenuPageStyles';
import axios from 'axios';
const MyCard = ({ item }) => (
  <Card style={{ backgroundColor: '#F0EEEE' }}>
    <Card.Title style={styles.my_card_text_c}
      title={item.name}
      subtitle={`Fiyat: ${item.price} TL`}
    />
    <Card.Content>
      <Text>İçerik;</Text>
      <Text variant="bodyMedium">{item.ingredients}</Text>
      <Text>{item.drinks}</Text>
      <Text>{item.snack}</Text>
    </Card.Content>
    
    <Card.Cover source={{ uri: item.imageUrl }} style={{marginHorizontal:5, marginVertical:3}}/>
    <Card.Actions>
      <Button buttonColor='red' textColor='white' onPress={() => window.alert('Menüye gitme eklendi')}>Menüye Git</Button>
    </Card.Actions>
  </Card>
);
const MenuPageBestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/popularproducts')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItems = ({ item }) => (
    <View style={{margin:5, padding:5}}>
      <MyCard item={item} />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItems}
      keyExtractor={(item) => item._id.toString()}
    />
  );
};

export default MenuPageBestSeller;
