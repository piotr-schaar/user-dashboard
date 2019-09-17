import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDummyContacts as fetchContactsAction } from 'redux/Contacts/Contacts.actions';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';

const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`;

const ContactsList = () => {
  const contactsStore = useSelector(({ ContactsReducer }) => ContactsReducer);
  const { contacts, filteredList, isFiltered } = contactsStore;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

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

export default ContactsList;
