import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/Heading';
import { connect } from 'react-redux';
import { fetchContacts as fetchContactsAction } from 'actions/ContactsActions';

import DashboardTemplate from 'templates/DashboardTemplate';
import ContactsList from 'components/Sections/Contacts/ContactsList';
import Tools from 'components/Sections/Contacts/Tools';

const WrapperStyled = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const ContactsPage = ({ ContactsReducer: { contacts }, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);
  return (
    <DashboardTemplate>
      <WrapperStyled>
        <Heading>Contacts</Heading>
        <FlexWrapper>
          <ContactsList />
          <div>
            <Tools />
          </div>
        </FlexWrapper>
      </WrapperStyled>
    </DashboardTemplate>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContactsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsPage);
