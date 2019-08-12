import { FETCH_CONTACTS, FETCH_REQUEST, ADD_CONTACT } from 'actions/ContactsActions';

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
        contacts: [...action.payload.data],
        isLoading: true,
      };
    case ADD_CONTACT:
      return {
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default ContactsReducer;
