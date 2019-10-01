import types from './Weather.types';

const initialState = {};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case types.FETCH_WEATHER:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default WeatherReducer;
