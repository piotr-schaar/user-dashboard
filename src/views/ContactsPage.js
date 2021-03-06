import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Heading } from 'components/Layout';

import DashboardTemplate from 'templates/DashboardTemplate';
import ContactsList from 'components/Sections/Contacts/ContactsList';
import Toolbox from 'components/Sections/Contacts/Toolbox';

const WrapperStyled = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

const BreadcrumbStyled = styled.span`
  color: grey;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactsPage = () => {
  const subtitle = useSelector(({ ContactsReducer }) => ContactsReducer.subtitle);

  return (
    <DashboardTemplate>
      <WrapperStyled>
        <HeadingWrapper>
          <Heading>
            Contacts {subtitle && <BreadcrumbStyled> &gt; {subtitle}</BreadcrumbStyled>}
          </Heading>
          <Toolbox />
        </HeadingWrapper>
        <FlexWrapper>
          <ContactsList />
        </FlexWrapper>
      </WrapperStyled>
    </DashboardTemplate>
  );
};

export default ContactsPage;
