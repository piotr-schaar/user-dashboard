import uuid from 'uuid';

import { Contact } from 'constants/index';
import types from './Contacts.types';

const initialState = {
  contacts: [
    new Contact(uuid(), 'Tom Hanks', 'tom@gmail.com', 'New York', false),
    new Contact(uuid(), 'Kate Moss', 'katem@gmail.com', 'New York', true),
    new Contact(uuid(), 'Pedro Cortez', 'pedrocortez@gmail.com', 'Mexico', false),
    new Contact(uuid(), 'Shinji Kagawashi', 'shinji@gmail.com', 'Tokyo', true),
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
        contacts: [...state.contacts, { ...action.payload, id: uuid() }],
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
