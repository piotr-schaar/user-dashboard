import uuid from 'uuid';
import { Task } from 'constants/index';
import types from './Tasks.types';


const initialState = {
  tasks: [
    new Task(uuid(), 'Create app 💻', 'home', true),
    new Task(uuid(), 'Throw out rubbish 🤟🏻', 'home', false),
    new Task(uuid(), 'Feed Leon before starving 🐕', 'home', false),
    new Task(uuid(), 'Drink a glass of water', 'home', true),
    new Task(uuid(), 'Fix bugs in project', 'work', true),
    new Task(uuid(), 'Conference with customer', 'work', true),
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
        isAddedNew: true,
      };
    }

    default:
      return state;
  }
};

export default TasksReducer;
