import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchContacts as fetchContactsAction } from 'actions/ContactsActions';

import Heading from 'components/Heading';
import Card from 'components/Card';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';

const UsersSection = ({ ContactsReducer: { contacts }, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <Heading color="white">Contacts</Heading>
      <Card>
        {contacts.map((item, index) => (
          <ContactsItem key={item.id} item={item} index={index} />
        ))}
      </Card>
    </>
  );
};

UsersSection.defaultProps = {
  contacts: [],
};
UsersSection.propTypes = {
  contacts: PropTypes.array,
  fetchContacts: PropTypes.func.isRequired,
  ContactsReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersSection);
