import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './CreditCard.style';
import * as yup from 'yup';

const CreditCard = ({ cardNumber, expiryMonth, expiryYear, securityCode, onCardNumberChange, onExpiryMonthChange, onExpiryYearChange, onSecurityCodeChange }) => {
    const CreditCardSchema = yup.object().shape({
        cardNumber: yup.string().required("Kart numarası boş bırakılamaz"),
        expiryMonth: yup.string().required("Son kullanma tarihi (ay) boş bırakılamaz"),
        expiryYear: yup.string().required("Son kullanma tarihi (yıl) boş bırakılamaz"),
        securityCode: yup.string().required("Güvenlik kodu boş bırakılamaz"),
    });

    const getError = (fieldName) => {
        try {
            CreditCardSchema.validateSyncAt(fieldName, {
                cardNumber,
                expiryMonth,
                expiryYear,
                securityCode,
            });
        } catch (error) {
            return error.message;
        }
        return "";
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Kart Numarası</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Kart Numarası"
                    value={cardNumber}
                    onChangeText={text => {
                        // Sadece sayıları filtrele
                        const numericValue = text.replace(/[^0-9]/g, "");
                        onCardNumberChange(numericValue);
                    }}
                    keyboardType="numeric"
                    maxLength={16} // Maksimum uzunluk 16 karakter
                />
                <Text style={styles.errorText}>{getError('cardNumber')}</Text>
            </View>

            <View style={styles.expiryContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Son Kullanma Tarihi (Ay)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ay"
                        value={expiryMonth}
                        onChangeText={text => {
                            const numericValue = text.replace(/[^0-9]/g, "");
                            onExpiryMonthChange(numericValue);
                        }}
                        keyboardType="numeric"
                        maxLength={2}
                    />
                    <Text style={styles.errorText}>{getError('expiryMonth')}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Son Kullanma Tarihi (Yıl)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Yıl"
                        value={expiryYear}
                        onChangeText={text => {
                            const numericValue = text.replace(/[^0-9]/g, "");
                            onExpiryYearChange(numericValue);
                        }}
                        keyboardType="numeric"
                        maxLength={4}
                    />
                    <Text style={styles.errorText}>{getError('expiryYear')}</Text>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Güvenlik Kodu</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Güvenlik Kodu"
                    value={securityCode}
                    onChangeText={text => {
                        const numericValue = text.replace(/[^0-9]/g, "");
                        onSecurityCodeChange(numericValue);
                    }}
                    keyboardType="numeric"
                    maxLength={3}
                />
                <Text style={styles.errorText}>{getError('securityCode')}</Text>
            </View>
        </View>
    );
};

export default CreditCard;
