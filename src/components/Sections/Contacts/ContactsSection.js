import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchContacts as fetchContactsAction } from 'actions/ContactsActions';

import Heading from 'components/Heading';
import Card from 'components/Card';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';
import Tabs from 'components/Tabs/Tabs';
import ContactAddForm from 'components/Sections/Contacts/ContactAddForm';

const SectionWrapper = styled.div`
  width: 400px;
  top: 0;
  right: 0;
  height: 100vh;
  position: fixed;
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
        <Card>
          <Heading color="white">Contacts</Heading>
          <Tabs scroll>
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
        </Card>
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
