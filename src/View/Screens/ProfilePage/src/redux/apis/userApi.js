import axios from 'axios';
import {setUser} from '../slicers/userSlicer';

export const getUser = id => dispatch => {
  axios
    .get('http://10.0.2.2:3000/users/' + id)
    .then(res => {
      dispatch(setUser(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};
