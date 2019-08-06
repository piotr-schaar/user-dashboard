import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { theme } from 'theme/MainTheme';
import PropTypes from 'prop-types';
import { routes } from 'routes';

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
  transition: all 1s;
  opacity: ${({ isAuth }) => (isAuth ? '0' : '1')};
`;

const Hero = styled.h1`
  text-transform: lowercase;
  user-select: none;
`;

const AuthTemplate = ({ children, userID }) => {
  const [isAuth, setAuth] = useState(false);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (userID) {
      setAuth(true);
      setTimeout(() => {
        setReady(true);
      }, 2000);
    }
  }, [userID]);

  if (isReady) {
    return <Redirect to="/" />;
  }

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
  userID: PropTypes.string,
};

AuthTemplate.defaultProps = {
  userID: null,
};

const mapStateToProps = ({ UserReducer: { userID = null } }) => ({
  userID,
});

export default connect(mapStateToProps)(AuthTemplate);
