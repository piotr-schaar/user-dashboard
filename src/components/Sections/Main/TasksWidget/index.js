import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Heading from 'components/Layout/Heading';
import ChangingWords from 'components/Layout/Animations/ChangingWords';

const WidgetWrapper = styled.div`
  margin: 0 15px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  border-radius: 20px;
  width: 100%;
`;

const TasksWidget = () => {
  const store = useSelector(({ TasksReducer }) => TasksReducer.tasks);

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(store.filter(item => !item.completed))
  }, [store])

  return (
    <WidgetWrapper>
      <Heading>What to do today?</Heading>
      <ChangingWords words={tasks} />
    </WidgetWrapper>
  );
};

export default TasksWidget;
