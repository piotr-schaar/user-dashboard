import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const WrapperStyled = styled.div`
  padding: 12px;
  width: 100%;
  border-bottom: 2px solid rgba(73, 85, 124, 0.4);
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 30px;
  align-items: center;
  :last-of-type {
    border: 0;
  }
  &:hover,
  &:active {
    background: rgba(54, 64, 99, 0.8);
  }
`;
const ParagraphStyled = styled.div`
  font-weight: 400;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.s : theme.fontSize.xs)};
  padding-bottom: ${({ big }) => big && '10px'};
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkStyled = styled.a`
  color: white;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const ContactsItem = ({ item: { name, email }, index }) => {
  return (
    <WrapperStyled index={index}>
      <AvatarWrapper>
        <FaUser />
      </AvatarWrapper>
      <DescWrapper>
        <ParagraphStyled big>{name}</ParagraphStyled>
        <ParagraphStyled>{email}</ParagraphStyled>
      </DescWrapper>
      <LinkStyled href={`mailto:${email}`}>
        <FaEnvelope />
      </LinkStyled>
    </WrapperStyled>
  );
};

ContactsItem.defaultProps = {
  name: '',
  email: '',
};

ContactsItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default ContactsItem;
