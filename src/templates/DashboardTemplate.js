import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const WrapperStyled = styled.div`
  background: #151A28;
  width: 100%;
  height: 100vh;
  padding: 20px 50px;
`;

const DashboardTemlate = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default DashboardTemlate;
