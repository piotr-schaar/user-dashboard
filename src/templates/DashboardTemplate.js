import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const WrapperStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 50px 20px 200px;
`;

const DashboardTemlate = ({ children }) => {
  return (
    <WrapperStyled>
      <Sidebar />
      {children}
    </WrapperStyled>
  );
};

export default DashboardTemlate;
