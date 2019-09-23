import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaPlus, FaSlidersH, FaHeart, FaChartPie } from 'react-icons/fa';
import { filterListByType } from 'redux/Contacts/Contacts.actions';

import Card from 'components/Layout/Card';
import Form from 'components/Sections/Contacts/Form';
import Fitlers from 'components/Sections/Contacts/Filters';
import Statistics from '../Statistics';

const WrapperStyled = styled.div``;
const ToolsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
const ToolItem = styled.li``;
const ToolWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 15px 15px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-size: 20px;
  color: grey;
  background: none;
  &:hover {
    border: 2px solid ${({ theme }) => theme.greenOpacity};
    color: ${({ theme }) => theme.green};
    box-shadow: 9px 9px 4px -12px rgba(0, 0, 0, 0.4);
  }
  a {
    color: inherit;
  }
`;

const Toolbox = styled.div``;

const settings = {
  newContact: 'newContact',
  filter: 'filter',
  statistics: 'statistics',
  favorites: 'favorites',
};

const Tools = () => {
  const dispatch = useDispatch();
  const [setting, setSetting] = useState('filter');

  // statistics, favorites;
  const { newContact, filter, statistics } = settings;

  const showToolbox = sets => {
    switch (sets) {
      case newContact:
        return <Form />;
      case filter:
        return <Fitlers />;
      case statistics:
        return <Statistics />;
      default:
        return null;
    }
  };
  const handleToolbox = set => (setting === set ? setSetting(null) : setSetting(set));

  const settingsList = [
    {
      icon: () => <FaPlus />,
      callback: () => handleToolbox(newContact),
    },
    {
      icon: () => <FaHeart />,
      callback: () => dispatch(filterListByType('favorites')),
    },
    {
      icon: () => <FaSlidersH />,
      callback: () => handleToolbox(filter),
    },
    {
      icon: () => <FaChartPie />,
      callback: () => handleToolbox(statistics),
    },
  ];
  return (
    <WrapperStyled>
      <ToolsList>
        {settingsList.map(({ name, icon, callback }) => (
          <ToolItem key={name}>
            <ToolWrapper onClick={callback}>{icon()}</ToolWrapper>
          </ToolItem>
        ))}
      </ToolsList>
      {/* <Toolbox>{showToolbox(setting)}</Toolbox> */}
    </WrapperStyled>
  );
};

export default Tools;
