import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const auth = (username, password) => dispatch => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post('http://localhost:5000/api/user/login', {
      username,
      password,
    })
    .then(payload => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILURE });
    });
};

export const registerUser = (username, password) => dispatch => {
  dispatch({ type: REGISTER_USER });

  // if (password.length < 5) {
  //   return dispatch({ type: REGISTER_USER_FAILURE });
  // }
  dispatch({ type: REGISTER_USER_SUCCESS });
  return axios
    .post('http://localhost:5000/api/user/register', {
      username,
      password,
    })
    .catch(err => dispatch({ type: REGISTER_USER_FAILURE, err }));
};
