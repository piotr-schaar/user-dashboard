import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabItem = styled.li`
  display: block;
  flex: 1;

  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;

  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(255, 255, 255, 0.1);
    `}
`;

const TabButton = styled.button`
  width: 100%;
  color: white;
  background: none;
  border: none;
  &:active,
  &:focus {
    outline: none;
  }
`;

const Tab = ({ label, onClick, activeTab }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    return activeTab === label ? setActive(true) : setActive(false);
  }, [activeTab]);

  return (
    <TabItem isActive={isActive}>
      <TabButton type="button" onClick={() => onClick(label)}>
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
