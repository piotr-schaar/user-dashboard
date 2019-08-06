import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const MainPage = ({ userID }) => {
  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return <></>;
};

MainPage.defaultProps = {
  userID: null,
};

MainPage.propTypes = {
  userID: PropTypes.string,
};

const mapStateToProps = ({ UserReducer }) => UserReducer;

export default connect(mapStateToProps)(MainPage);
