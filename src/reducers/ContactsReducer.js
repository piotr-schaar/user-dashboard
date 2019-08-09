import { FETCH_CONTACTS, FETCH_REQUEST } from 'actions/ContactsActions';

const initialState = {
  contacts: [],
};

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: [...action.payload.data],
      };

    default:
      return state;
  }
};

export default ContactsReducer;
