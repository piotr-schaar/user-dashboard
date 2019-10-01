import { combineReducers } from 'redux';
import UserReducer from './User/User.reducer';
import ContactsReducer from './Contacts/Contacts.reducer';
import TasksReducer from './Tasks/Tasks.reducer';
import WeatherReducer from './Weather/Weather.reducer';

export default combineReducers({
  UserReducer,
  ContactsReducer,
  TasksReducer,
  WeatherReducer
});
