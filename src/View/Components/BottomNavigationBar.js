import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuPage from "../Screens/MenuPage/MenuPage";
import AppProfile from "../Screens/ProfilePage/src/App";
import Router from "../Screens/OrderDetailsPage/src/Router";
import BuyScreen from "../Screens/OrderDetailsPage/src/pages/BuyScreen/BuyScreen";
import { Dimensions } from "react-native";

const Tab = createMaterialBottomTabNavigator();
let piece =0;
const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="MenuPage"
      activeColor="#DE3C3C" 
      inactiveColor="white" 
      barStyle={{ backgroundColor: '#CC0000' , height:Dimensions.get('window').height/14}}
    >
      <Tab.Screen
        name="MenuPage"
        component={MenuPage}
        options={{
          tabBarColor: 'white',
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} /> 
          ),
        }}
      />
        <Tab.Screen
          name="Menu"
          component={Router}
          options={{
            tabBarLabel: '', 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={30} /> 
            ),
          }}
        />
      <Tab.Screen
        name="Sepet"
        component={BuyScreen}
        options={{
          tabBarBadge:piece,
          tabBarLabel: '', 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basket" color={color} size={30} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AppProfile}
        options={{
          tabBarLabel: '', 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigationBar;
