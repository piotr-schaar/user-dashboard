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

export const addContact = contact => ({
  type: types.ADD_CONTACT,
  id: uuid(),
  payload: {
    ...contact,
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

export const hideFilteredList = () => ({
  type: types.HIDE_FILTERED_RESULTS,
});
