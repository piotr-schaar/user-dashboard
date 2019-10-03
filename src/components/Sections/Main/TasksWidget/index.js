import React from 'react';
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
  const tasks = useSelector(({ TasksReducer }) =>
    TasksReducer.tasks.filter(item => !item.completed),
  );

  return (
    <WidgetWrapper>
      <Heading>What to do today?</Heading>
        <ChangingWords words={tasks} />
    </WidgetWrapper>
  );
};

export default TasksWidget;
