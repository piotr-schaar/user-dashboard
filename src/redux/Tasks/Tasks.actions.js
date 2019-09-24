import axios from 'axios';
import types from './Tasks.types';

export const fetchTasks = () => dispatch => {
  dispatch({ type: types.FETCH_REQUEST });
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then(({ data }) => {
      const tasks = data;

      dispatch({
        type: types.FETCH_TASKS,
        payload: tasks,
      });
    })

    .catch(err => console.log(err));
};
