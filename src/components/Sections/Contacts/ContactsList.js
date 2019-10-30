import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';

const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin: 0 -15px;
  align-content: baseline;
`;

const ContactsList = () => {
  const contactsStore = useSelector(({ ContactsReducer }) => ContactsReducer);
  const { contacts, filteredList, isFiltered } = contactsStore;

  const renderContacts = () => {
    const shownContacts = isFiltered ? filteredList : contacts;
    return shownContacts.map((item, index) => (
      <ContactsItem key={item.id} item={item} index={index} />
    ));
  };

  return <WrapperStyled>{renderContacts()}</WrapperStyled>;
};

export default ContactsList;
