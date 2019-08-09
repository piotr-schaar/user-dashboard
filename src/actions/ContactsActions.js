import axios from 'axios';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_REQUEST = 'FETCH_REQUEST';

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
