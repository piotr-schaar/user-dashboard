import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: flex;
`;

const WrapperStyled = styled.div`
  width: ${({ isAuth }) => (isAuth ? '10%' : '60%')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.greenLight};
  transition: all 1s;
  opacity: ${({ isAuth }) => (isAuth ? '0' : '1')};
`;

const SideWrapperStyled = styled.div`
  width: ${({ isAuth }) => (isAuth ? '100%' : '40%')};
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  color: ${({ theme }) => theme.blue};
  font-size: 70px;
  transition: width 1s;
`;

const Hero = styled.h1`
  text-transform: lowercase;
  user-select: none;
`;

const AuthTemplate = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  return (
    <GridContainer>
      <WrapperStyled isAuth={isAuth}>{children}</WrapperStyled>
      <SideWrapperStyled isAuth={isAuth}>
        <Hero>
          Movie
          <br />
          Hub
        </Hero>
      </SideWrapperStyled>
    </GridContainer>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.array.isRequired,
};

export default AuthTemplate;
