import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Tabs from 'components/Tabs/Tabs';

import DashboardTemlate from '../templates/DashboardTemplate';
import ContactsSection from '../components/Sections/Contacts/ContactsSection';

const MainPage = ({ UserReducer: { userID } }) => {
  if (userID === null) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardTemlate>
      <ContactsSection />
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
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
