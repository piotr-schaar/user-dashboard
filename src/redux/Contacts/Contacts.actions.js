import uuid from 'uuid/v4';
import { filtersTypes } from './Contacts.reducer';
import types from './Contacts.types';

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

export const filterListByType = (filterType, value, isUpdateActualValue) => dispatch => {
  dispatch({ type: types.SHOW_FILTERED_RESULTS, isUpdateActualValue });
  dispatch({
    type: types.FILTER_LIST_BY_TYPE,
    payload: {
      filterType,
      value,
    },
  });
};
