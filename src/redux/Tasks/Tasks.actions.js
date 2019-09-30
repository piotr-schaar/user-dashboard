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

export const toggleCompleteTask = id => ({
  type: types.TOGGLE_TASK_COMPLETED,
  payload: {
    id,
  },
});

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: {
    task,
  }
})