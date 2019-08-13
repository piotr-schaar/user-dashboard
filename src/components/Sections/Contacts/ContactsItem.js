import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const WrapperStyled = styled.div`
  padding: 12px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 30px;
  align-items: center;
  :last-of-type {
    border: 0;
  }
`;
const ParagraphStyled = styled.div`
  font-weight: ${({ big }) => (big ? '600' : '300')}
  font-size: ${({ theme, big }) => (big ? theme.fontSize.s : theme.fontSize.xs)};
  padding-bottom: ${({ big }) => big && '10px'};
  color: #4a4c4d;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkStyled = styled.a`
  color: ${({ theme }) => theme.green};
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
