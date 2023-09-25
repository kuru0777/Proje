// authReducer.js
import * as actionTypes from './actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  isLogin: true, // Yeni özellik: isLogin
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLogin: true, // Kullanıcı oturum açtığında isLogin'i true yap
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLogin: true, // Oturum açma başarısız olsa bile isLogin'i true yapabilirsiniz
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLogin: true, // Kayıt başarılı olduğunda isLogin'i true yap
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLogin: true, // Kayıt başarısız olsa bile isLogin'i true yapabilirsiniz
      };
    case actionTypes.TOGGLE_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin, // Giriş yap ve Kayıt ol arasında geçiş yapmak için bu eylemi kullanabilirsiniz
      };
    default:
      return state;
  }
};

export default authReducer;
