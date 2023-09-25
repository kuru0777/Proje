import * as actionTypes from './actionTypes';

export const login = (email, password) => {
  // Burada API çağrıları yapılabilir.
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {email, password},
  };
};

export const register = (name, surname, email, password, address) => {
  // Burada API çağrıları yapılabilir.
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: {name, surname, email, password, address},
  };
};
// actions.js
import * as actionTypes from './actionTypes';

export const toggleLogin = () => ({
  type: actionTypes.TOGGLE_LOGIN,
});
