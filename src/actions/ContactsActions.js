import axios from 'axios';
import uuid from 'uuid/v4';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const ADD_CONTACT = 'ADD_CONTACT';

export const fetchContacts = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(({ data }) => {
      const contactsList = [];
      data.map(item => {
        let newItem = {};
        newItem = {
          name: item.name,
          email: item.email,
          city: item.address.city,
        };
        return contactsList.push(newItem);
      });
      dispatch({
        type: FETCH_CONTACTS,
        payload: contactsList,
      });
    })

    .catch(err => console.log(err));
};

export const addContact = (name, email, city) => ({
  type: 'ADD_CONTACT',
  id: uuid(),
  payload: {
    name,
    email,
    city,
  },
});
