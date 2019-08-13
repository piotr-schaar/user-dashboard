import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardTemplate from '../templates/DashboardTemplate';

const MainPage = ({ UserReducer: { userID } }) => {
  if (userID === null) {
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

MainPage.propTypes = {
  UserReducer: PropTypes.object.isRequired,
  userID: PropTypes.string,
};

const mapStateToProps = ({ UserReducer }) => ({
  UserReducer,
});

export default connect(mapStateToProps)(MainPage);
