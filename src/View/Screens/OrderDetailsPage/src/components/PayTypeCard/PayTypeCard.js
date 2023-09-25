import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './PayTypeCard.style';

const PayTypeCard = ({ item }) => {
    const formatPrice = (price) => {
        return price.toFixed(2);
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
                        <Text style={styles.price}>{formatPrice(item.price)} TL</Text>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.quantity}>Adet Sayısı  : {item.quantity}</Text>
                        </View>
                        <Text style={styles.totalPrice}>Toplam Fiyat: {formatPrice(item.price * item.quantity)} TL</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PayTypeCard;
