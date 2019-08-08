import { combineReducers } from 'redux';
import UserReducer from 'reducers/UserReducer';
import MoviesReducer from 'reducers/MoviesReducer';

export default combineReducers({
  UserReducer,
  MoviesReducer,
});
