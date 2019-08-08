import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_REQUEST = 'FETCH_REQUEST';

const APIkey = 'bd5f28af222edabf18f21f9cf5683cca';
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&sort_by=popularity.desc`;

export const fetchMovies = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get(url)
    .then(payload => payload.data.results)
    .then(payload => dispatch({ type: FETCH_ITEMS, payload }))
    .catch(err => console.log(err));
};
