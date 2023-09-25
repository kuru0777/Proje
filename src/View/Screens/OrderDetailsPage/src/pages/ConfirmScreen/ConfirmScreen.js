import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Delivery from '../../components/Delivery/Delivery';
import styles from './ConfirmScreen.style';
import { useDispatch } from "react-redux";

const ConfirmScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const handleAddPress = () => {
        dispatch({ type: 'RESET_SELECTED_PRODUCTS' });
        navigation.navigate('MenuScreen')
    }
    
     return (
        <View style={styles.container}>
            <Text style={styles.text} >Siparişiniz Hazırlanıyor</Text>
            
            <TouchableOpacity style={styles.button} onPress={handleAddPress}>
                <Text style={styles.buttonText}>ANASAYFAYA DÖN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmScreen;
