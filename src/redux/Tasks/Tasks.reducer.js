import uuid from 'uuid';
import types from './Tasks.types';

const initialState = {
  tasks: [
    {
      id: uuid(),
      name: 'Create app 💻',
      completed: true,
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
    {
      id: uuid(),
      name: 'test-work 💻',
      completed: true,
      category: 'work',
    },
    {
      id: uuid(),
      name: 'test-work 2 🤟🏻',
      completed: false,
      category: 'work',
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
    case types.TOGGLE_TASK_COMPLETED: {
      const { id } = action.payload;
      const selectedItem = state.tasks.find(x => x.id === id);
      const idx = state.tasks.indexOf(selectedItem);
      return {
        ...state,
        tasks: state.tasks.map((content, i) =>
          i === idx ? { ...content, completed: !content.completed } : content,
        ),
      };
    }
    case types.ADD_TASK: {
      const { task } = action.payload;
      task.id = uuid();
      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    }

    default:
      return state;
  }
};

export default TasksReducer;
