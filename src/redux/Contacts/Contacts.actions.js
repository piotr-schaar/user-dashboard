import axios from 'axios';
import uuid from 'uuid/v4';
import { filtersTypes } from './Contacts.reducer';
import types from './Contacts.types';

export const fetchDummyContacts = () => dispatch => {
  dispatch({ type: types.FETCH_REQUEST });
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
        type: types.FETCH_CONTACTS,
        payload: contactsList.slice(0, 4),
      });
    })

    .catch(err => console.log(err));
};

export const handleContactToFavorites = (name, isFavorite) => dispatch => {
  dispatch({
    type: types.FILTER_LIST_BY_TYPE,
    payload: {
      name,
      filterType: filtersTypes.byFavorites,
    },
  });

  dispatch({
    type: types.HANDLE_CONTACT_TO_FAVORITES,
    payload: {
      name,
      isFavorite,
    },
  });
};

export const addContact = (name, email, city) => ({
  type: types.ADD_CONTACT,
  id: uuid(),
  payload: {
    name,
    email,
    city,
  },
});

export const filterListByType = (filterType, value) => dispatch => {
  dispatch({ type: types.SHOW_FILTERED_RESULTS });

  dispatch({
    type: types.FILTER_LIST_BY_TYPE,
    payload: {
      filterType,
      value,
    },
  });
};
