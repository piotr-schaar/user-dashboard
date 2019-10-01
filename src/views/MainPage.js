import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetch } from 'redux/Weather/Weather.actions';
import useGeoPosition from 'hooks/useGeoPosition';

import DashboardTemplate from '../templates/DashboardTemplate';

const MainPage = () => {
  const userStore = useSelector(({ UserReducer }) => UserReducer);
  const store = useSelector(({ WeatherReducer }) => WeatherReducer);

  const { position, error } = useGeoPosition();

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.getOwnPropertyNames(position).length !== 0) {
      dispatch(fetch(position));
    }
  }, [position]);

  if (userStore.userID === null) {
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
