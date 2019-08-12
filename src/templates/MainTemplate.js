import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import PropTypes from 'prop-types';

const WrapperStyled = styled.div`
`;
const MainTemplate = ({ children }) => {
  return (
    <WrapperStyled>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </WrapperStyled>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
