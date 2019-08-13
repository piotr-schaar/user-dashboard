import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaSlidersH, FaHeart, FaChartPie } from 'react-icons/fa';

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

const Tools = () => {
  return (
    <WrapperStyled>
      <ToolsList>
        <ToolItem>
          <ToolWrapper>
            <FaPlus />
            New contact
          </ToolWrapper>
        </ToolItem>
        <ToolItem>
          <ToolWrapper>
            <FaHeart />
            Favorites
          </ToolWrapper>
        </ToolItem>
        <ToolItem>
          <ToolWrapper>
            <FaSlidersH />
            Filter
          </ToolWrapper>
        </ToolItem>
        <ToolItem>
          <ToolWrapper>
            <FaChartPie />
            Statistics
          </ToolWrapper>
        </ToolItem>
      </ToolsList>
    </WrapperStyled>
  );
};

export default Tools;
