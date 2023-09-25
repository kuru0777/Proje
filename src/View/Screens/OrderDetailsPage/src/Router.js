import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./redux/reducers";
import MenuScreen from './pages/MenuScreen';
import BuyScreen from './pages/BuyScreen/BuyScreen';
import PayType from './pages/PayType/PayType';
import ConfirmScreen from "./pages/ConfirmScreen/ConfirmScreen";
import CreditCardScreen from "./pages/CreditCardScreen/CreditCardScreen";

const Stack = createNativeStackNavigator();

const store = createStore(reducers);

const Router = () => {
  return (
    <Provider store={store}>
        <Stack.Navigator

        >
          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BuyScreen"
            component={BuyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PayType"
            component={PayType}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmScreen"
            component={ConfirmScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreditCardScreen"
            component={CreditCardScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </Provider>
  );
}

export default Router;
