import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Tabs from 'components/Tabs/Tabs';
import TasksItem from './TasksItem';

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TasksList = () => {
  const store = useSelector(reducers => reducers.TasksReducer);

  const [tasksAll, setTaskAll] = useState([]);
  const [tasksHome, setTasksHome] = useState([]);
  const [tasksWork, setTasksWork] = useState([]);

  const filterTasks = (arr, type) => arr.filter(item => item.category === type);

  useEffect(() => {
    setTaskAll(store.tasks);
    setTasksHome(filterTasks(store.tasks, 'home'));
    setTasksWork(filterTasks(store.tasks, 'work'));
  }, [store]);

  return (
    <>
      <Tabs>
        <UlStyled label="all">
          {tasksAll.map((task, index) => (
            <TasksItem
              key={task.id}
              index={index}
              category={task.category}
              id={task.id}
              task={task}
              completed={task.completed}
            />
          ))}
        </UlStyled>
        <UlStyled label="home">
          {tasksHome.map((task, index) => (
            <TasksItem
              key={task.id}
              index={index}
              category={task.category}
              id={task.id}
              task={task}
              completed={task.completed}
            />
          ))}
        </UlStyled>
        <UlStyled label="work">
          {tasksWork.map((task, index) => (
            <TasksItem
              key={task.id}
              index={index}
              category={task.category}
              id={task.id}
              task={task}
              completed={task.completed}
            />
          ))}
        </UlStyled>
      </Tabs>
    </>
  );
};

export default TasksList;
