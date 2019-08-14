import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDummyContacts as fetchContactsAction } from 'actions/ContactsActions';
import { getFilterContacts, byFavorites } from 'reducers/ContactsReducer';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';

const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`;

const Gugu = styled.div``;

const ContactsList = ({ ContactsReducer: { contacts }, fetchContacts, filteredList }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);
  return (
    <WrapperStyled>
      {filteredList &&
        filteredList.map((item, index) => <ContactsItem key={index} item={item} index={index} />)}
      {contacts.map((item, index) => (
        <ContactsItem key={index} item={item} index={index} />
      ))}
    </WrapperStyled>
  );
};

ContactsList.defaultProps = {
  contacts: [],
};
ContactsList.propTypes = {
  contacts: PropTypes.array,
  fetchContacts: PropTypes.func.isRequired,
  ContactsReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    ...state,
    filteredList: getFilterContacts(state.ContactsReducer.contacts, byFavorites),
  };
};
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
