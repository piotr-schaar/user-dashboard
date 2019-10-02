import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import WeatherWidget from 'components/Sections/Main/WeatherWidget';
import DashboardTemplate from 'templates/DashboardTemplate';

const WrapperStyled = styled.div`
  width: 100%;
`;

const MainPage = () => {
  const store = useSelector(({ UserReducer }) => UserReducer);

  if (store.userID === null) {
    return <Redirect to="/login" />;
  }

  return (
    <DashboardTemplate>
      <h1>Main</h1>
      <WrapperStyled>
        <WeatherWidget />
      </WrapperStyled>
    </DashboardTemplate>
  );
};

MainPage.defaultProps = {
  userID: null,
};

export default MainPage;
