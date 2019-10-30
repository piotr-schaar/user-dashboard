import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import WeatherWidget from 'components/Sections/Main/WeatherWidget';
import TasksWidget from 'components/Sections/Main/TasksWidget';

import DashboardTemplate from 'templates/DashboardTemplate';
import { Heading } from 'components/Layout';
import ContactsWidget from '../components/Sections/Main/ContactsWidget';

const WrapperStyled = styled.div`
  width: 100%;
`;

const CustomHeading = styled(Heading)`
  font-size: 42px;
`;

const MainPage = () => {
  const store = useSelector(({ UserReducer }) => UserReducer);
  const { userID, name } = store;
  if (userID === null) {
    return <Redirect to="/login" />;
  }

  return (
    <DashboardTemplate>
      <CustomHeading>Hi {name}!</CustomHeading>
      <WrapperStyled>
        <WeatherWidget />
        <TasksWidget />
        <ContactsWidget />
      </WrapperStyled>
    </DashboardTemplate>
  );
};

MainPage.defaultProps = {
  userID: null,
};

export default MainPage;
