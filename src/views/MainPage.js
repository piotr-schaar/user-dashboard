import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import DashboardTemlate from '../templates/DashboardTemplate';
import ContactsSection from '../components/Sections/Contacts/ContactsSection';

const MainPage = ({ UserReducer: { userID } }) => {
  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardTemlate>
      <Sidebar />
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

const mapStateToProps = ({ UserReducer }) => ({
  UserReducer,
});

export default connect(mapStateToProps)(MainPage);
