import React from 'react';
import styled from 'styled-components';

const isEven = n => n % 2 === 0;

const ItemWrapper = styled.li`
  background: ${({ index, theme }) => (isEven(index) ? theme.grey : 'white')};
  padding: 2px;
`;

const TasksItem = ({ task: { name, completed }, index }) => {
  return (
    <ItemWrapper index={index}>
      <p>{name}</p>
    </ItemWrapper>
  );
};

export default TasksItem;
