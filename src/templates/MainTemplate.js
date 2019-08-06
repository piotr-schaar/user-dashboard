import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import PropTypes from 'prop-types';

const WrapperStyled = styled.div`
  min-height: 100vh;
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
