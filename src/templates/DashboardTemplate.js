import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  padding: 20px 50px;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const DashboardTemlate = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default DashboardTemlate;
