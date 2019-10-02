import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const WrapperStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
`;

const AnimationWrapper = styled.div`
  opacity: ${({ mounted }) => (mounted ? '1' : '0')};
  transition: all ease-in 0.2s;
`;

const MainWrapper = styled.div`
  width: 100%;
  padding: 20px 50px 20px 200px;
  display: flex;
  flex-wrap: wrap;
`;
const DashboardTemlate = ({ children }) => {
  const [Redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(true);
  }, []);

  return (
    <WrapperStyled>
      <Sidebar />
      <AnimationWrapper mounted={Redirect}><MainWrapper>{children}</MainWrapper></AnimationWrapper>
    </WrapperStyled>
  );
};

export default DashboardTemlate;
