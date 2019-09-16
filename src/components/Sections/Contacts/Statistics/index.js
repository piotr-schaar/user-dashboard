import React from 'react';
import { connect } from 'react-redux';
import { getContactsList } from 'selectors/ContactsFilters';

const mapStateToProps = ({ ContactsReducer: { contacts } }) => {
  return {
    contacts: getContactsList({ contacts }),
  };
};

const Statistics = props => {
  return (
    <div>
      <h1>siemka</h1>
    </div>
  );
};

export default connect(mapStateToProps)(Statistics);
