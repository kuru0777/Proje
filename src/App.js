import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuPage from './View/Screens/MenuPage/MenuPage';
import BottomNavigationBar from './View/Components/BottomNavigationBar';
import MyAppbar from './View/Components/Appbar';
import AuthScreen from "./View/Screens/LoginPage/AuthScreen";
import { Provider } from "react-redux";
import { Appbar, PaperProvider } from "react-native-paper";
import store from "./View/Screens/LoginPage/store";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
       <Stack.Navigator
        screenOptions={{
          header: (props) => <MyAppbar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={BottomNavigationBar} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
};

export default App;
