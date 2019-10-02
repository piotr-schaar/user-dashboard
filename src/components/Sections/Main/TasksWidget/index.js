import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Heading from 'components/Layout/Heading';

const WidgetWrapper = styled.div`
  margin: 15px 0;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  border-radius: 20px;
  width: 100%;
`;

const TaskItem = styled.div``;

const TasksWidget = () => {
  const tasks = useSelector(({ TasksReducer }) => TasksReducer.tasks);
  const [currentTask, setCurrentTask] = useState(tasks[0].name);

  useEffect(() => {
    let i = 1;
    let task;
    setInterval(() => {
      task = tasks[i];
      i++;
      if (i > tasks.length - 1) {
        i = 0;
      }
      setCurrentTask(task.name);
    }, 3000);
  }, []);

  return (
    <WidgetWrapper>
      <Heading>What to do today?</Heading>
      <TaskItem>{currentTask}</TaskItem>
    </WidgetWrapper>
  );
};

export default TasksWidget;
