import React, { useState } from 'react';
import { Card, Text, Button, Modal, Portal, TextInput } from "react-native-paper";
import styles from "../../../../MenuPage/MenuPageStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import colors from 'material-colors';
import { red700 } from 'react-native-paper/lib/module/styles/themes/v2/colors';

const MyCard = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const [note, setNote] = useState('');
  const navigation = useNavigation();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onNoteChange = (text) => setNote(text);

  const handleAddToBasket = () => {
    console.log("Not:", note);
    hideModal();
    navigation.navigate('Sepet', { item });
  }

  return (
    <TouchableOpacity onPress={showModal} activeOpacity={1}>
      <Card style={{ backgroundColor: '#F0EEEE' }}>
        <Card.Title
          style={styles.my_card_text_c}
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
          <Button buttonColor='red' textColor='white'>
            Sepete Ekle
          </Button>
        </Card.Actions>
      </Card>

      <Portal >
        <Modal visible={visible} onDismiss={hideModal}>
          <Card>
            <Card.Title title={item.name} />
            <Card.Content>
              <Text>İçerik:</Text>
              <Text variant="bodyMedium">{item.ingredients}</Text>
              <Text>{item.drinks}</Text>
              <Text>{item.snack}</Text>
            </Card.Content>
            <TextInput
              label="Not Ekle"
              value={note}
              onChangeText={onNoteChange}
            />
            <Card.Actions>
              <Button onPress={hideModal} textColor='red'rippleColor='red' >Kapat</Button>
              <Button onPress={handleAddToBasket} buttonColor='red' >
                Sepete Ekle
              </Button>
            </Card.Actions>
          </Card>
        </Modal>
      </Portal>
    </TouchableOpacity>
  );
};

export default MyCard;
