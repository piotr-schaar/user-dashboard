import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import Heading from 'components/Layout/Heading';

const animate = keyframes`
  0% {
    opacity: 0;
    transform:translateY(-50%);
  }
  2% {
    opacity: 1;
    transform:translateY(0);
  }
  18% {
    opacity: 1;
    transform:translateY(0px);
  }
  20% {
    opacity: 0;
    transform:translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(50px)
  }
`;

const WidgetWrapper = styled.div`
  margin: 0 15px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  border-radius: 20px;
  width: 100%;
`;

const animationChilds = (i, duration) => {
  return `
    &:nth-child(${i + 1}) {
      animation-delay: ${(duration) * 2}s;
    }
  `;
};

const getAnimation = length => {
  let str = '';
  for (let index = 0; index < length; index += 1) {
    str += animationChilds(index, index);
  }
  return str;
};



const TasksWidget = () => {
  const tasks = useSelector(({ TasksReducer }) =>
    TasksReducer.tasks.filter(item => !item.completed),
  );

  const AnimationWrapper = styled.div`
    position: relative;
    padding: 20px;
    span {
      position: absolute;
      top: 0;
      overflow: hidden;
      animation: ${animate} ${tasks.length *2}s linear infinite;
      opacity: 0;
      ${getAnimation(tasks.length)}
    }
  `;

  return (
    <WidgetWrapper>
      <Heading>What to do today?</Heading>
      <AnimationWrapper>
        {tasks.map(item => (
          <span key={item.id}>{item.name}</span>
        ))}
      </AnimationWrapper>
    </WidgetWrapper>
  );
};

export default TasksWidget;
