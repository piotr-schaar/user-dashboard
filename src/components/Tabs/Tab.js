import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabItem = styled.li`
  display: block;
  flex: 1;
  list-style: none;
  &:hover,
  &:active {
    color: white;
    background: ${({ theme }) => theme.green};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.green};
      background: ${({ theme }) => theme.lightGrey};
    `}
`;

const TabButton = styled.button`
  width: 100%;
  font-weight: 600;
  padding: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: ${({ theme, isActive }) => isActive && theme.green};
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    color: white;
    outline: none;
  }
`;

const Tab = ({ label, onClick, activeTab }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    return activeTab === label ? setActive(true) : setActive(false);
  }, [activeTab, label]);

  return (
    <TabItem isActive={isActive}>
      <TabButton isActive={isActive} type="button" onClick={() => onClick(label)}>
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
