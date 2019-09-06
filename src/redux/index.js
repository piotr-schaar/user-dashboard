import { combineReducers } from 'redux';
import UserReducer from './User/User.reducer';
import ContactsReducer from './Contacts/Contacts.reducer';

export default combineReducers({
  UserReducer,
  ContactsReducer,
});
