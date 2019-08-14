import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading';

import DashboardTemplate from 'templates/DashboardTemplate';
import ContactsList from 'components/Sections/Contacts/ContactsList';
import Tools from 'components/Sections/Contacts/Tools';

const WrapperStyled = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const ContactsPage = () => {
  return (
    <DashboardTemplate>
      <WrapperStyled>
        <Heading>Contacts</Heading>
        <FlexWrapper>
          <ContactsList />
          <Tools />
        </FlexWrapper>
      </WrapperStyled>
    </DashboardTemplate>
  );
};

export default ContactsPage;
