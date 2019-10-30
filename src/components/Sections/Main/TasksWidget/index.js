import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Heading, Widget } from 'components/Layout';
import ChangingWords from 'components/Layout/Animations/ChangingWords';

const TasksWidget = () => {
  const store = useSelector(({ TasksReducer }) => TasksReducer.tasks);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(store.filter(item => !item.completed));
  }, [store]);

  return (
    <Widget>
      <Heading>What to do today?</Heading>
      <ChangingWords words={tasks} />
    </Widget>
  );
};

export default TasksWidget;
