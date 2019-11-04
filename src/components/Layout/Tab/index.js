import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabItem = styled.li`
  display: block;
  list-style: none;
`;

const TabButton = styled.button`
  width: 100%;
  font-weight: 600;
  padding: 7px;
  background: none;
  color: ${({ theme }) => theme.fontColor};
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.green};
    `}

  &:active,
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.green};
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
        {label.toLowerCase()}
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
