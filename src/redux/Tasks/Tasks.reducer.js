import uuid from 'uuid';
import types from './Tasks.types';

const initialState = {
  tasks: [
    {
      id: uuid(),
      name: 'Create app 💻',
      completed: false,
      category: 'home',
    },
    {
      id: uuid(),
      name: 'Throw out rubbish 🤟🏻',
      completed: false,
      category: 'home',
    },
    {
      id: uuid(),
      name: 'Feed Leon before starving 🐕',
      completed: false,
      category: 'home',
    },
    {
      id: uuid(),
      name: 'Drink a glass water 😭',
      completed: true,
      category: 'home',
    },
  ],
};

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default TasksReducer;
