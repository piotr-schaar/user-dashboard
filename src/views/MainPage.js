import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardTemplate from '../templates/DashboardTemplate';

const MainPage = () => {
  const store = useSelector(({ UserReducer }) => UserReducer);
  if (store.userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardTemplate>
      <h1>Main</h1>
    </DashboardTemplate>
  );
};

MainPage.defaultProps = {
  userID: null,
};

export default MainPage;
