import React from 'react';
import { useSelector } from 'react-redux';
import useRandomItemFromArray from 'hooks/useRandomItemFromArray';
import { Widget, Heading } from 'components/Layout';

const ContactsWidget = () => {
  const store = useSelector(({ ContactsReducer }) => ContactsReducer);
  const contactsList = store.contacts;

  const pickedContact = useRandomItemFromArray(contactsList);

  return (
    <Widget width={300}>
      <Heading>Maybe time to catch:</Heading>
      <p>{pickedContact.name}</p>
    </Widget>
  );
};

export default ContactsWidget;
