import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashboardTemlate from '../templates/DashboardTemplate';
import ContactsSection from '../components/Sections/Contacts/ContactsSection';

const MainPage = ({ UserReducer: { userID } }) => {
  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardTemlate>
      <h1>siema</h1>
      <ContactsSection />
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
