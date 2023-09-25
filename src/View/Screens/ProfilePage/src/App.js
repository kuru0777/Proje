import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/storeDeneme';
import MainPage from './screens/mainPage';
import Appp from './screens/api';
import { SafeAreaView } from 'react-native-safe-area-context';



function AppProfile(){
  return (
    <Provider store={store}>
      
      <View>
      <MainPage/>
      </View>
    
    </Provider>
  );
};


export default AppProfile;
