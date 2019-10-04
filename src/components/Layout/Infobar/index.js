import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Heading from 'components/Layout/Heading'

const InfobarWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.lightGrey};
  margin-left: 100px;
  padding: 20px 40px;
  background: ${({ theme }) => theme.black};
  min-height: 50px;
  p {
      font-weight: 300;
      color: ${({theme}) => theme.textColor};
  }
`;

const Infobar = () => {
  const [sectionName, setSectionName] = useState();
  const [info, setInfo] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const path = window.location.pathname.split('/').pop();
    setSectionName(path);
  }, []);

  useEffect(() => {
    switch (sectionName) {
      case 'contacts':
        setInfo({
          title: 'Contacts',
          description: 'Manage your contacts',
        });
        break;
      default:
        setInfo({
          title: 'home',
          description: 'xd',
        });
    }
  }, [sectionName]);

  return (
    <InfobarWrapper>
      <Heading small>{info.title}</Heading>
      <p>{info.description}</p>
    </InfobarWrapper>
  );
};

export default Infobar;
