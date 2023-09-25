import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './BuyCard.style';
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const BuyCard = ({ item}) => {
    
    
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const incrementQuantity = (item) => {
        dispatch({ type: 'INCREMENT_CART_ITEM_QUANTITY', payload: item });
    };

    const decrementQuantity = (item) => {
        if (item.quantity === 1) {
            dispatch({ type: 'DECREMENT_CART_ITEM_QUANTITY', payload: item });
            navigation.navigate('MenuScreen');
        } else {
            dispatch({ type: 'DECREMENT_CART_ITEM_QUANTITY', payload: item });
        }
    };

    return (
        <View style={styles.productContainer}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price.toFixed(2)} TL</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => decrementQuantity(item)}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => incrementQuantity(item)}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.totalPrice}>Toplam Fiyat: {(item.price * item.quantity).toFixed(2)} TL</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default BuyCard;
