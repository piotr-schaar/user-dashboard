import axios from 'axios';
import types from './User.types';

export const auth = (username, password) => dispatch => {
  dispatch({ type: types.AUTH_REQUEST });

  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then(payload => {
      dispatch({ type: types.AUTH_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: types.AUTH_FAILURE });
    });
};

export const registerUser = (username, password) => dispatch => {
  dispatch({ type: types.REGISTER_USER });

  dispatch({ type: types.REGISTER_USER_SUCCESS });
  return axios
    .post('http://localhost:9000/api/user/register', {
      username,
      password,
    })
    .catch(err => dispatch({ type: types.REGISTER_USER_FAILURE, err }));
};
