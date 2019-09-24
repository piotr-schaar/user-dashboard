import uuid from 'uuid';

import types from './Contacts.types';

const initialState = {
  contacts: [
    {
      id: uuid(),
      name: 'Tom Hanks',
      email: 'tom@gmail.com',
      city: 'New York',
      isFavorite: false,
    },
    {
      id: uuid(),
      name: 'Kate Moss',
      email: 'katem@gmail.com',
      city: 'New York',
      isFavorite: true,
    },
    {
      id: uuid(),
      name: 'Pedro Cortez',
      email: 'pedrocortez@gmail.com',
      city: 'Mexico',
      isFavorite: false,
    },
    {
      id: uuid(),
      name: 'Shinji Kagawashi',
      email: 'shinji@gmail.com',
      city: 'Tokyo',
      isFavorite: true,
    },
  ],
  isLoading: false,
  filteredList: [],
  isFiltered: false,
  subtitle: '',
};

export const filtersTypes = {
  byFavorites: 'favorites',
  byCities: 'byCities',
};

const { byFavorites, byCities } = filtersTypes;

const setSubtitle = (name, cond) => cond && name;

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        isLoading: true,
      };
    case types.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case types.HANDLE_CONTACT_TO_FAVORITES: {
      const { isFavorite, name } = action.payload;
      const selectedItem = state.contacts.find(x => x.name === name);
      const idx = state.contacts.indexOf(selectedItem);
      return {
        ...state,
        contacts: state.contacts.map((content, i) =>
          i === idx ? { ...content, isFavorite: !isFavorite } : content,
        ),
      };
    }
    case types.SHOW_FILTERED_RESULTS: {
      const checkIsUpdateActualValue = action.isUpdateActualValue ? true : !state.isFiltered;
      return {
        ...state,
        isFiltered: checkIsUpdateActualValue,
      };
    }
    case types.HIDE_FILTERED_RESULTS: {
      return { ...state, isFiltered: false, subtitle: '' };
    }
    case types.FILTER_LIST_BY_TYPE: {
      switch (action.payload.filterType) {
        case byFavorites:
          return {
            ...state,
            subtitle: setSubtitle(byFavorites, state.isFiltered),
            filteredList: state.contacts.filter(contact => contact.isFavorite),
          };
        case byCities:
          return {
            ...state,
            subtitle: setSubtitle(action.payload.value, state.isFiltered),
            filteredList: state.contacts.filter(contact => contact.city === action.payload.value),
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default ContactsReducer;
