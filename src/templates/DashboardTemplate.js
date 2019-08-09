import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const WrapperStyled = styled.div`
  background: #151A28;
  width: 100%;
  padding: 20px 50px;
  min-height: 100vh;
  display: flex;
`;

const DashboardTemlate = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default DashboardTemlate;
