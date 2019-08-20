import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDummyContacts as fetchContactsAction } from 'actions/ContactsActions';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';

const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`;

const ContactsList = ({
  ContactsReducer: { contacts, filteredList, isFiltered },
  fetchContacts,
}) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);
  return (
    <WrapperStyled>
      {isFiltered
        ? filteredList.map((item, index) => <ContactsItem key={index} item={item} index={index} />)
        : contacts.map((item, index) => <ContactsItem key={index} item={item} index={index} />)}
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
  };
};
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
