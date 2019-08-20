import axios from 'axios';
import uuid from 'uuid/v4';
import { byFavorites } from 'reducers/ContactsReducer';

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const ADD_CONTACT = 'ADD_CONTACT';
export const HANDLE_CONTACT_TO_FAVORITES = 'ADD_CONTACT_TO_FAVORITES';
export const FILTER_LIST_BY_TYPE = 'FILTER_LIST_BY_TYPE';
export const SHOW_FILTERED_RESULTS = 'SHOW_FILTERED_RESULTS';

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

export const handleContactToFavorites = (name, isFavorite) => dispatch => {
  dispatch({
    type: FILTER_LIST_BY_TYPE,
    payload: {
      name,
      filterType: byFavorites,
    },
  });

  dispatch({
    type: HANDLE_CONTACT_TO_FAVORITES,
    payload: {
      name,
      isFavorite,
    },
  });
};

export const addContact = (name, email, city) => ({
  type: ADD_CONTACT,
  id: uuid(),
  payload: {
    name,
    email,
    city,
  },
});

export const filterListByType = filterType => dispatch => {
  dispatch({ type: SHOW_FILTERED_RESULTS });

  dispatch({
    type: FILTER_LIST_BY_TYPE,
    payload: {
      filterType,
    },
  });
};
