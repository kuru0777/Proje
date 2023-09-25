import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from 'react-native-config';
import MenuCard from '../../components/MenuCard/MenuCard';
import useFetch from '../../hooks/useFetch/useFetch';
import SearchBar from '../../components/SearchBar';
import { ActivityIndicator } from "react-native-paper";
import MyCard from "./MyCard";
import axios from 'axios';



const MenuScreen = () => {
    
  const { data, loading, error } = useFetch("http://10.0.2.2:3000/products");
  const [products, setProducts] = useState([]);
  const [text, setText] = React.useState("");
  
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderProduct = ({ item }) => (
    <View style={{margin:5, padding:5}}>
      <MyCard item={item} />
    </View>
  );

    const filteredProduct = products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()));
    if (loading) {
      return <ActivityIndicator animating={true} />;
  }
  if (error) {
      return <Text>{error}</Text>;
  }

    return (
        <View style={{backgroundColor:'white'}} >
            <SearchBar setText={setText} />
            <FlatList
                data={filteredProduct}
                renderItem={renderProduct}
                keyExtractor={(item) => item._id.toString()}
            />
        </View>
    );
};

export default MenuScreen;
