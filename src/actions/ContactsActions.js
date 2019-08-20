import axios from 'axios';
import uuid from 'uuid/v4';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const ADD_CONTACT = 'ADD_CONTACT';
export const HANDLE_CONTACT_TO_FAVORITES = 'ADD_CONTACT_TO_FAVORITES';
export const FILTER_LIST_BY_TYPE = 'FILTER_LIST_BY_TYPE';

export const fetchDummyContacts = () => dispatch => {
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
        payload: contactsList.slice(0, 4),
      });
    })

    .catch(err => console.log(err));
};

export const handleContactToFavorites = (name, isFavorite) => ({
  type: HANDLE_CONTACT_TO_FAVORITES,
  payload: {
    name,
    isFavorite,
  },
});

export const addContact = (name, email, city) => ({
  type: ADD_CONTACT,
  id: uuid(),
  payload: {
    name,
    email,
    city,
  },
});

export const filterListByType = filterType => ({
  type: FILTER_LIST_BY_TYPE,
  payload: {
    filterType,
  },
});
