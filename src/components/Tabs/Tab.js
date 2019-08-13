import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabItem = styled.li`
  display: block;
  flex: 1;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  border: 1px solid black;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.blue};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(255, 255, 255, 0.1);
    `}
`;

const TabButton = styled.button`
  width: 100%;
  color: ${({ color }) => color}
  font-weight: 600;
  background: none;
  border: none;
  cursor:pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

const Tab = ({ label, onClick, activeTab, color }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    return activeTab === label ? setActive(true) : setActive(false);
  }, [activeTab]);

  return (
    <TabItem isActive={isActive}>
      <TabButton color={color} type="button" onClick={() => onClick(label)}>
        {label}
      </TabButton>
    </TabItem>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
