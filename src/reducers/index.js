import { combineReducers } from 'redux';
import UserReducer from 'reducers/UserReducer';
import ContactsReducer from 'reducers/ContactsReducer';

export default combineReducers({
  UserReducer,
  ContactsReducer,
});
