import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_REQUEST,
  REGISTER_USER_FAILURE,
} from 'actions/UserActions';
import { REGISTER_USER_SUCCESS } from '../actions/UserActions';

const initialState = {
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data.id,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isError: false,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
export default userReducer;
