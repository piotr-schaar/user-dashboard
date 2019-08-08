import { FETCH_ITEMS, FETCH_REQUEST } from 'actions/MoviesActions';

const initialState = {
  movies: [],
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_ITEMS:
      return {
        ...state,
        movies: [...action.payload],
      };
    default:
      return state;
  }
};

export default MoviesReducer;
