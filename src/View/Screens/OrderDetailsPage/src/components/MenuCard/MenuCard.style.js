import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
       // borderColor: '#bdbdbd',
        backgroundColor: '#C08261',
        margin: 10,
        flexDirection: 'row',
        flex:1
    },
    image: {
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        minHeight: 100,
    },
    body_container: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between', // Yatayda boşluk bırak
        alignItems: 'center', // Dikeyde hizala
    },
    titleContainer: {
        flex: 1, // Ürün başlığı ve fiyat bilgisini esnek olarak ayarla
        marginRight: 10, // Sağ taraftan boşluk bırak
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: '#CC0000',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
