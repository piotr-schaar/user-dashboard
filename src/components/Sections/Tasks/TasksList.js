import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TasksItem from './TasksItem';

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TasksList = () => {
  const store = useSelector(reducers => reducers.TasksReducer);

  return (
    <div>
      <UlStyled>
        {store.tasks.map((task, index) => (
          <TasksItem index={index} id={task.id} task={task} />
        ))}
      </UlStyled>
    </div>
  );
};

export default TasksList;
