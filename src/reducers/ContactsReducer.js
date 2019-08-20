import {
  FETCH_CONTACTS,
  FETCH_REQUEST,
  ADD_CONTACT,
  HANDLE_CONTACT_TO_FAVORITES,
  FILTER_LIST_BY_TYPE,
} from 'actions/ContactsActions';

const initialState = {
  contacts: [],
  isLoading: false,
  filteredList: [],
  isFilter: false,
};
export const byFavorites = 'favorites';

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
    case HANDLE_CONTACT_TO_FAVORITES: {
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
    case FILTER_LIST_BY_TYPE: {
      switch (action.payload.filterType) {
        case byFavorites:
          return {
            ...state,
            isFilter: true,
            filteredList: state.contacts.filter(contact => contact.isFavorite),
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
