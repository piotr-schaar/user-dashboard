import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaPlus, FaSlidersH, FaHeart, FaChartPie } from 'react-icons/fa';
import { filterListByType } from 'redux/Contacts/Contacts.actions';

import Card from 'components/Layout/Card';
import Form from 'components/Sections/Contacts/Form';
import Filters from 'components/Sections/Contacts/Filters';
import Statistics from '../Statistics';

const WrapperStyled = styled.div`
  position: relative;
`;
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

const TestWrapper = styled.div`
  position: absolute;
  z-index: 10;
  background: white;
  left: -100%;
`;

const Tools = () => {
  const dispatch = useDispatch();

  const [modalOpen, setOpenModal] = useState({
    cond: false,
    type: String,
  });

  const settingsList = [
    {
      icon: () => <FaPlus />,
      callback: () =>
        setOpenModal({
          cond: !modalOpen.cond,
          type: 'form',
        }),
    },
    {
      icon: () => <FaHeart />,
      callback: () => dispatch(filterListByType('favorites')),
    },
    {
      icon: () => <FaSlidersH />,
      callback: () =>
        setOpenModal({
          cond: !modalOpen.cond,
          type: 'Filters',
        }),
    },
    {
      icon: () => <FaChartPie />,
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
      {modalOpen.cond && (
        <TestWrapper>{modalOpen.type === 'form' ? <Form /> : <Filters />}</TestWrapper>
      )}
    </WrapperStyled>
  );
};

export default Tools;
