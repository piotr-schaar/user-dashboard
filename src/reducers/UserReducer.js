import { AUTH_SUCCESS, REGISTER_USER_FAILURE } from 'actions/UserActions';
import { REGISTER_USER_SUCCESS } from '../actions/UserActions';

// dummy
import avatar from '../placeholder/avatar.jpg';

const initialState = {
  userID: `5d0e44b4033d0286511d0494`,
  isError: false,
  avatar,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
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
