import {
  FETCH_CONTACTS,
  FETCH_REQUEST,
  ADD_CONTACT,
  ADD_CONTACT_TO_FAVORITES,
} from 'actions/ContactsActions';

const initialState = {
  contacts: [],
  isLoading: false,
};

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: [...action.payload],
        isLoading: true,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case ADD_CONTACT_TO_FAVORITES: {
      const selectedItem = state.contacts.find(x => x.name === action.payload.name);
      const idx = state.contacts.indexOf(selectedItem);
      return {
        ...state,
        contacts: state.contacts.map((content, i) =>
          i === idx ? { ...content, isFavorite: true } : content,
        ),
      };
    }
    default:
      return state;
  }
};
export const byFavorites = 'favorites';

export const getFilterContacts = (state, filter) => {
  switch (filter) {
    case byFavorites:
      return state.filter(item => item.isFavorite);
    default:
      return null;
  }
};

export default ContactsReducer;
