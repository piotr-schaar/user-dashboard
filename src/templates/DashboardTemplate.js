import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const WrapperStyled = styled.div`
  background: #2c3554;
  width: 100%;
  height: 100vh;
  padding: 50px 50px 50px 120px;
`;

const DashboardTemlate = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default DashboardTemlate;
