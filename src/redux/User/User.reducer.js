import types from './User.types';

// dummy
import avatar from '../../placeholder/avatar.jpg';

const initialState = {
  userID: `5d0e44b4033d0286511d0494`,
  isError: false,
  avatar,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isError: false,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
export default userReducer;
