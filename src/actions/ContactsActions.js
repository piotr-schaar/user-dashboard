import axios from 'axios';
import uuid from 'uuid/v4';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const ADD_CONTACT = 'ADD_CONTACT';

export const fetchContacts = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(payload =>
      dispatch({
        type: FETCH_CONTACTS,
        payload,
      }),
    )
    .catch(err => console.log(err));
};

export const addContact = (username, email) => ({
  type: 'ADD_CONTACT',
  id: uuid(),
  payload: {
    username,
    email,
  },
});
