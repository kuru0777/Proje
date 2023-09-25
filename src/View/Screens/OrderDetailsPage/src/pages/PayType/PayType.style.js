import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    margin: 10,

  },
  imageContainer: {
    width: 100,
    minHeight: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'center', // Center the image vertically
    height:'100%'
  },
  image: {
    width: '100%', // Ensure the image takes up the container width
    height: '100%', // Ensure the image takes up the container height
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
    body_container: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between', // Yatayda boşluk bırak
        alignItems: 'center', // Dikeyde hizala
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
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    confirmButtonContainer: {
        marginTop: 20,
        alignSelf: 'center', // Ortada hizala
    },

    productContainer: {
        marginBottom: 10,
    },
    totalPriceContainer: {
        borderTopWidth: 1,
        borderTopColor: '#bdbdbd',
        paddingVertical: 10,
        alignItems: 'flex-end', // Sağ tarafa hizala
        marginRight: 10,
    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,

        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
   
});
