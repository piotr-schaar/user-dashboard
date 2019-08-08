import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardTemlate from '../templates/DashboardTemplate';
import NewMoviesSection from '../components/Sections/NewMoviesSection';

const MainPage = ({ UserReducer: { userID } }) => {
  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardTemlate>
      <NewMoviesSection />
    </DashboardTemlate>
  );
};

MainPage.defaultProps = {
  userID: null,
};

MainPage.propTypes = {
  UserReducer: PropTypes.object.isRequired,
  userID: PropTypes.string,
};

const mapStateToProps = ({ UserReducer, MoviesReducer }) => ({
  UserReducer,
  MoviesReducer,
});

export default connect(mapStateToProps)(MainPage);
