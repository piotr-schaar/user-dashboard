import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchContacts as fetchContactsAction } from 'actions/ContactsActions';

import Heading from 'components/Heading';
import Card from 'components/Card';
import ContactsItem from 'components/Sections/Contacts/ContactsItem';
import Tabs from 'components/Tabs/Tabs';

const ContactsWrapper = styled.div`
  height: 300px;
  overflow-y: scroll;
`;
const SectionWrapper = styled.div``;

const UsersSection = ({ ContactsReducer: { contacts }, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <SectionWrapper>
      <Heading color="white">Contacts</Heading>
      <ContactsWrapper>
        <Card>
          <Tabs>
            <div label="All">
              {contacts.map((item, index) => (
                <ContactsItem key={item.id} item={item} index={index} />
              ))}
            </div>
            <div label="siema">
              <h1>siema</h1>
            </div>
          </Tabs>
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
