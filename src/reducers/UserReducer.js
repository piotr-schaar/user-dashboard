import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_REQUEST } from 'actions/UserActions';

const initialState = {
  name: 'siemson',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data.id,
      };

    default:
      return state;
  }
};
export default userReducer;
