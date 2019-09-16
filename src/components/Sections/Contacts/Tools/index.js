import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaPlus, FaSlidersH, FaHeart, FaChartPie } from 'react-icons/fa';
import { filterListByType } from 'redux/Contacts/Contacts.actions';

import Form from 'components/Sections/Contacts/Form';
import Fitlers from 'components/Sections/Contacts/Filters';
import Statistics from '../Statistics';

const WrapperStyled = styled.div`
  margin: 0 15px;
`;
const ToolsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ToolItem = styled.li`
  width: 50%;
  padding: 10px;
`;
const ToolWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  border-radius: 10px;
  background: white;
  width: 100%;
  font-size: 20px;
  border: 2px solid ${({ theme }) => theme.green};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.greenOpacity};
    cursor: pointer;
    color: white;
    outline: none;
    svg {
      color: white;
    }
  }
  svg {
    color: grey;
    margin-right: 15px;
  }
`;

const Toolbox = styled.div`
  margin: 0 10px;
`;

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
      name: 'New Contact',
      icon: () => <FaPlus />,
      callback: () => handleToolbox(newContact),
    },
    {
      name: 'Favorites',
      icon: () => <FaHeart />,
      callback: () => dispatch(filterListByType('favorites')),
    },
    {
      name: 'Filter',
      icon: () => <FaSlidersH />,
      callback: () => handleToolbox(filter),
    },
    {
      name: 'Statistics',
      icon: () => <FaChartPie />,
      callback: () => null,
    },
  ];
  return (
    <WrapperStyled>
      <ToolsList>
        {settingsList.map(({ name, icon, callback }) => (
          <ToolItem key={name}>
            <ToolWrapper onClick={callback}>
              {icon()}
              {name}
            </ToolWrapper>
          </ToolItem>
        ))}
      </ToolsList>
      <Toolbox>{showToolbox(setting)}</Toolbox>
    </WrapperStyled>
  );
};

export default Tools;
