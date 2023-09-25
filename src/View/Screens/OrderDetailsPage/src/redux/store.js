import { createStore, combineReducers, applyMiddleware } from 'redux';
import selectedProductsReducer from './selectedProductsReducer';
import { Provider as PaperProvider } from 'react-native-paper';

// Diğer reducer'ları buraya ekleyebilirsiniz

const rootReducer = combineReducers({
  selectedProducts: selectedProductsReducer,
  // Diğer reducer'ları da ekleyin
});

const store = createStore(rootReducer, applyMiddleware(/*middleware'ler buraya eklenir*/));

export { store, PaperProvider }; // Hem store hem de PaperProvider'i dışarıya export ediyoruz
