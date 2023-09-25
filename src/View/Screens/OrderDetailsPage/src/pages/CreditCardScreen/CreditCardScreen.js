import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './CreditCard.style';
import { useNavigation } from '@react-navigation/native';
import CreditCard from '../../components/CreditCard';
import * as yup from 'yup';

const CreditCardScreen = () => {
    const navigation = useNavigation();

    const [cardNumber, setCardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');

    const CreditCardSchema = yup.object().shape({
        cardNumber: yup.string().required("Tüm alanlar doldurulmak zorundadır"),
        expiryMonth: yup.string().required("Tüm alanlar doldurulmak zorundadır"),
        expiryYear: yup.string().required("Tüm alanlar doldurulmak zorundadır"),
        securityCode: yup.string().required("Tüm alanlar doldurulmak zorundadır"),
    });

    const handleSaveCard = async () => {
        try {
            await CreditCardSchema.validate({
                cardNumber,
                expiryMonth,
                expiryYear,
                securityCode,
            });

            navigation.navigate('ConfirmScreen');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <CreditCard
                    cardNumber={cardNumber}
                    expiryMonth={expiryMonth}
                    expiryYear={expiryYear}
                    securityCode={securityCode}
                    onCardNumberChange={setCardNumber}
                    onExpiryMonthChange={setExpiryMonth}
                    onExpiryYearChange={setExpiryYear}
                    onSecurityCodeChange={setSecurityCode}
                />
            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={handleSaveCard}>
                <Text style={styles.buttonText}>ÖDEMEYİ TAMAMLA</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreditCardScreen;
