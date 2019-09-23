import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { fetchDummyContacts as fetchContactsAction } from 'redux/Contacts/Contacts.actions';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';

const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`;

const ContactsList = () => {
  const contactsStore = useSelector(({ ContactsReducer }) => ContactsReducer);
  const { contacts, filteredList, isFiltered } = contactsStore;

  return (
    <WrapperStyled>
      {isFiltered
        ? filteredList.map((item, index) => (
            <ContactsItem key={item.id} item={item} index={index} />
          ))
        : contacts.map((item, index) => <ContactsItem key={item.id} item={item} index={index} />)}
    </WrapperStyled>
  );
};

export default ContactsList;
