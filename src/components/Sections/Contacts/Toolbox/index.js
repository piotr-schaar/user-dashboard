import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import { FaPlus, FaSlidersH, FaHeart, FaChartPie } from 'react-icons/fa';
import { filterListByType } from 'redux/Contacts/Contacts.actions';

import Form from 'components/Sections/Contacts/Form';
import Filters from 'components/Sections/Contacts/Filters';
import Statistics from 'components/Sections/Contacts/Statistics';

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

const settings = {
  newContact: 'newContact',
  filter: 'filter',
  statistics: 'statistics',
  favorites: 'favorites',
};

const Toolbox = styled.div`
  position: absolute;
  z-index: 10;
  background: white;
  left: -100%;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all ease-in 0.2s;
`;

const Tools = () => {
  const dispatch = useDispatch();

  const [modalOpen, setOpenModal] = useState({
    cond: false,
    type: String,
  });

  const settingItem = (iconComponent, type) => {
    const settingFn = () =>
      type === settings.favorites
        ? dispatch(filterListByType(settings.favorites))
        : setOpenModal({
            cond: !modalOpen.cond,
            type,
          });
    return {
      icon: () => iconComponent,
      callback: () => settingFn(),
    };
  };
  const settingsList = [
    settingItem(<FaPlus />, settings.newContact),
    settingItem(<FaHeart />, settings.favorites),
    settingItem(<FaSlidersH />, settings.filters),
    settingItem(<FaChartPie />, settings.statistics),
  ];

  const renderTool = type => {
    const { newContact, filters, statistics } = settings;
    switch (type) {
      case newContact:
        return <Form />;
      case filters:
        return <Filters />;
      case statistics:
        return <Statistics />;
      default:
        return <p>Something goes wrong</p>;
    }
  };
  return (
    <WrapperStyled>
      <OutsideClickHandler
        onOutsideClick={() =>
          setOpenModal({
            cond: false,
            type: '',
          })
        }
      >
        <ToolsList>
          {settingsList.map(({ icon, callback }, index) => (
            <ToolItem key={index}>
              <ToolWrapper onClick={callback}>{icon()}</ToolWrapper>
            </ToolItem>
          ))}
        </ToolsList>
        <Toolbox active={modalOpen.cond}>{renderTool(modalOpen.type)}</Toolbox>
      </OutsideClickHandler>
    </WrapperStyled>
  );
};

export default Tools;
