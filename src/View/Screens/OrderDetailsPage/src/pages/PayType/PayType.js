import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'; // Removed unnecessary Image import
import styles from './PayType.style';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import PayTypeCard from '../../components/PayTypeCard/PayTypeCard'; // Import the PayTypeCard component

const PayType = () => {
    const selectedProducts = useSelector(state => state.selectedProducts);
    const navigation = useNavigation();
    const [paymentOption, setPaymentOption] = useState("kapida_odeme");

    const calculateTotalPrice = () => {
        return selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const formatPrice = (price) => {
        return price.toFixed(2);
    };

    const handleConfirmButton = () => {
        if (paymentOption === "kart") {
            navigation.navigate('CreditCardScreen')
        } else if (paymentOption === "kapida_odeme") {
            navigation.navigate('ConfirmScreen');
        }  
    };
    
    // Use the PayTypeCard component for rendering each selected product
    const renderProduct = ({ item }) => (
        <PayTypeCard item={item} />
    );
    
    return (
        <View style={{ flex: 1 ,  backgroundColor:'#D9D9D9' }} >
            <FlatList
                data={selectedProducts}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
            />
            <View style={styles.paymentOptionsContainer}>
                <Button
                    titleStyle={{ color: "black" }}
                    title="Kredi Kartı"
                    onPress={() => setPaymentOption("kart")}
                    color={paymentOption === "kart" ? "red" : "gray"} // Seçili seçeneği vurgula
                />
                <Button
                    titleStyle={{ color: "red" }}
                    title="Kapıda Ödeme"
                    onPress={() => setPaymentOption("kapida_odeme")}
                    color={paymentOption === "kapida_odeme" ? "red" : "gray"} // Seçili seçeneği vurgula
                />

            </View>
            <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>Toplam Fiyat: {formatPrice(calculateTotalPrice())} TL</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleConfirmButton}>
                <Text style={styles.buttonText}>Onayla ve Bitir</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PayType;


