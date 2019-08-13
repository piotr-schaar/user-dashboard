import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchContacts as fetchContactsAction } from 'actions/ContactsActions';

import Heading from 'components/Heading';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';
import Tabs from 'components/Tabs/Tabs';
import ContactAddForm from 'components/Sections/Contacts/ContactAddForm';

const SectionWrapper = styled.div`
  width: 400px;
  top: 0;
  right: 0;
  padding: 15px 20px;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background: #f6f5fa;
`;
const ContactsWrapper = styled.div`
  height: 100vh;
`;
const TabContent = styled.div``;
const UsersSection = ({ ContactsReducer: { contacts }, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <SectionWrapper>
      <ContactsWrapper>
        <Heading small color="grey">
          Contacts
        </Heading>
        <Tabs color="#78B15C" scroll>
          <TabContent label="All">
            {contacts.map((item, index) => (
              <ContactsItem key={item.id} item={item} index={index} />
            ))}
          </TabContent>
          <div label="Favorites">
            {contacts.map((item, index) => (
              <ContactsItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </Tabs>
        <ContactAddForm />
      </ContactsWrapper>
    </SectionWrapper>
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
