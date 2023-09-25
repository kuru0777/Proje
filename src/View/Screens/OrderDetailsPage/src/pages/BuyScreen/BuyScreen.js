import React from "react";
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import styles from './BuyScreen.style';
import { useNavigation } from '@react-navigation/native';
import { Text, Card, Button } from "react-native-paper";
import PayType from "../PayType/PayType";
import BuyCard from '../../components/BuyCard'; // BuyCard bileşenini içe aktarın
import { connect } from 'react-redux';
const SEPET = [];
  let piece=1;
  const MyCard = ({ item }) => (
    
    <Card style={{ backgroundColor: '#F0EEEE' , flexDirection:'column-reverse'}}>
        <Card.Title style={styles.my_card_text_c}
        title={item.name}
        subtitle={`Fiyat: ${item.price} TL`}
      /> 
      <Card.Actions style={{flexDirection:'row'}}>
      <Button buttonColor='red' onPress={() => { piece--; console.log(piece); }}> - </Button>
      <Button buttonColor='red' onPress={() => { piece--; console.log(piece); }}> - </Button>
      <Button buttonColor='red' onPress={() => { piece++; console.log(piece); }}> + </Button>
      </Card.Actions>
      <Card.Content>
     <Text>Adet:</Text>
      </Card.Content>
      
    </Card>
  );

const BuyScreen = ({selectedProducts = []}) => {
    
    const navigation = useNavigation();

    const calculateTotalPrice = () => {
        return selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const formatPrice = (price) => {
        return price.toFixed(2); // Virgülden sonra 2 basamak göster
    };

    const handlePayType = () => {
        navigation.navigate('PayType');
    };

    const renderProduct = ({ item }) => (
        <View style={{margin:5, padding:5}}>
      <MyCard item={item} />
    </View>
    );

    return (


        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={SEPET}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                />
            <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>Toplam Fiyat: {formatPrice(calculateTotalPrice())} TL</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePayType}>
                <Text style={styles.buttonText}>Ödeme Seçenekleri</Text>
            </TouchableOpacity>
        </View>

    );

};

export default BuyScreen;
