import axios from 'axios';
import types from './Weather.types';

const apiUrl = `17d6bfd6371a13f96fab09879da4c26f`;

export const fetch = location => dispatch => {
  const fixedlong = location.longitude.toFixed();
  const fixedlan = location.latitude.toFixed();
  dispatch({ type: types.FETCH_WEATHER });
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${fixedlan}&lon=${fixedlong}&APPID=${apiUrl}`,
    )
    .then(payload => {
      dispatch({ type: types.FETCH_WEATHER, payload });
    });
};
