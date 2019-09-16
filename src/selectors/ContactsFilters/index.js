import { createSelector } from 'reselect';

const contactsListSelector = state => state;

export const getContactsList = createSelector(
  contactsListSelector,
  contacts => {
    return contacts;
  },
);
