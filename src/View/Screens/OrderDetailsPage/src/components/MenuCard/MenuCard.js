import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './MenuCard.style';
import { useNavigation } from '@react-navigation/native';

const MenuCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
        navigation.navigate('BuyScreen');
    };
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
            />
            <View style={styles.body_container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} TL</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                    <Text style={styles.buttonText}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MenuCard;
