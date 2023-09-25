// App.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./AuthScreen";
import store from "../LoginPage/store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <Provider store={store}>
        
        <Stack.Navigator>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
          />
        </Stack.Navigator>

        
       
      </Provider>
    
  );
}

export default App;
