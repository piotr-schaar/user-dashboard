import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaSlidersH, FaHeart, FaChartPie } from 'react-icons/fa';
import Form from 'components/Sections/Contacts/Form';

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
  const { newContact, filter, statistics, favorites } = settings;

  const [setting, setSetting] = useState(null);

  const showSettings = sets => {
    switch (sets) {
      case newContact:
        return <Form />;
      default:
        return null;
    }
  };

  const handleSettings = set => (setting === set ? setSetting(null) : setSetting(set));
  return (
    <WrapperStyled>
      <ToolsList>
        <ToolItem>
          <ToolWrapper onClick={() => handleSettings(newContact)}>
            <FaPlus />
            New contact
          </ToolWrapper>
        </ToolItem>
        <ToolItem>
          <ToolWrapper onClick={() => handleSettings(favorites)}>
            <FaHeart />
            Favorites
          </ToolWrapper>
        </ToolItem>
        <ToolItem>
          <ToolWrapper onClick={() => handleSettings(filter)}>
            <FaSlidersH />
            Filter
          </ToolWrapper>
        </ToolItem>
        <ToolItem>
          <ToolWrapper onClick={() => handleSettings(statistics)}>
            <FaChartPie />
            Statistics
          </ToolWrapper>
        </ToolItem>
      </ToolsList>
      <Toolbox>{showSettings(setting)}</Toolbox>
    </WrapperStyled>
  );
};

export default Tools;
