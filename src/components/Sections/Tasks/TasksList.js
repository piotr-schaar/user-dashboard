import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Tabs } from 'components/Layout';
import TasksItem from './TasksItem';

const UlStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const getTasksWithNameAsCategory = (name, tasks) => ({
  name,
  tasks,
});

const filterTasks = (arr, type) => arr.filter(item => item.category === type);

const TasksList = () => {
  const store = useSelector(reducers => reducers.TasksReducer);

  const [tasksAll, setTaskAll] = useState([]);
  const [tasksHome, setTasksHome] = useState([]);
  const [tasksWork, setTasksWork] = useState([]);

  useEffect(() => {
    setTaskAll(store.tasks);
    setTasksHome(filterTasks(store.tasks, 'home'));
    setTasksWork(filterTasks(store.tasks, 'work'));
  }, [store]);

  const tasksAllCategories = [
    getTasksWithNameAsCategory('All', tasksAll),
    getTasksWithNameAsCategory('Home', tasksHome),
    getTasksWithNameAsCategory('Work', tasksWork),
  ];

  return (
    <>
      <Tabs>
        {tasksAllCategories.map(({ name, tasks }) => {
          return (
            <UlStyled label={name} key={name}>
              {tasks.map((task, index) => (
                <TasksItem
                  key={task.id}
                  index={index}
                  task={task}
                  completed={task.completed}
                  lastAdded={tasksAll.length - 1}
                />
              ))}
            </UlStyled>
          );
        })}
      </Tabs>
    </>
  );
};

export default TasksList;
