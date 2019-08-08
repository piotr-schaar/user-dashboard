import { FETCH_ITEMS, FETCH_REQUEST } from 'actions/MoviesActions';

const initialState = {
  moviesPopular: [],
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_ITEMS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    default:
      return state;
  }
};

export default MoviesReducer;
