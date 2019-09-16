import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Heading from 'components/Layout/Heading';

import DashboardTemplate from 'templates/DashboardTemplate';
import ContactsList from 'components/Sections/Contacts/ContactsList';
import Tools from 'components/Sections/Contacts/Tools';

const WrapperStyled = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  /* developmnent maxwidth for doublescreen */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const BreadcrumbStyled = styled.span`
  color: grey;
`;
const ContactsPage = props => {
  const subtitle = useSelector(({ ContactsReducer }) => ContactsReducer.subtitle);

  return (
    <DashboardTemplate>
      <WrapperStyled>
        <Heading>
          Contacts {subtitle && <BreadcrumbStyled> &gt; {subtitle}</BreadcrumbStyled>}
        </Heading>
        <FlexWrapper>
          <ContactsList />
          <Tools />
        </FlexWrapper>
      </WrapperStyled>
    </DashboardTemplate>
  );
};

export default ContactsPage;
