// selectedProductsReducer.js
const initialState = {
    selectedProducts: [], // Başlangıçta seçilen ürünler boş bir dizi
  };
  
  export default function selectedProductsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productIndex = state.selectedProducts.findIndex(item => item.id === action.payload.id);
      
            if (productIndex !== -1) {
              const updatedProducts = [...state.selectedProducts];
              updatedProducts[productIndex].quantity++;
              return { ...state, selectedProducts: updatedProducts };
            } else {
              return { ...state, selectedProducts: [...state.selectedProducts, { ...action.payload, quantity: 1 }] };
            }
          case 'INCREMENT_CART_ITEM_QUANTITY':
            const incrementedProducts = state.selectedProducts.map(item => {
              if (item.id === action.payload.id) {
                const newQuantity = item.quantity + 1;
                return { ...item, quantity: newQuantity };
              }
              return item;
            });
            return { ...state, selectedProducts: incrementedProducts };
      
          case 'DECREMENT_CART_ITEM_QUANTITY':
            const decrementedProducts = state.selectedProducts.map(item => {
              if (item.id === action.payload.id && item.quantity > 0) {
                const newQuantity = item.quantity - 1;
                return { ...item, quantity: newQuantity };
              }
              return item;
            });
      
            // Filtreleme işlemi burada gerçekleştiriliyor
            const filteredProducts = decrementedProducts.filter(item => item.quantity > 0);
      
            return { ...state, selectedProducts: filteredProducts };
      
          case 'RESET_SELECTED_PRODUCTS':
            return { ...state, selectedProducts: [] };
            default:
                return state;
    }
  }
  