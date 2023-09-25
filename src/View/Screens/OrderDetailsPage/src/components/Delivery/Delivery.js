import React from "react";
import { View, StyleSheet } from 'react-native';

function Delivery() {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Ekran genişliği kadar
        height: '50%', // Ekran yüksekliğinin yarısı kadar
        backgroundColor: 'purple' // Delivery bileşeni arka plan rengi
    },
    animation: {
        width: 300, // Animation genişliği
        height: 300 // Animation yüksekliği
    }
});

export default Delivery;
