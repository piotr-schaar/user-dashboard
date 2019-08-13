import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope, FaUser, FaHeart } from 'react-icons/fa';

const WrapperStyled = styled.div`
  padding: 12px;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 5px;
  align-items: center;
  box-shadow: 5px 6px 7px -7px rgba(0, 0, 0, 0.2);
  margin: 5px 0;
  :last-of-type {
    border: 0;
  }
`;
const ParagraphStyled = styled.div`
  font-weight: ${({ big }) => (big ? '600' : '300')};
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
  color: ${({ theme }) => theme.grey};
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  margin: 0 5px;
  color: ${({ theme }) => theme.green};
  opacity: 0.5;
  a {
    color: inherit;
  }
  &:hover {
    opacity: 1;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
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
      <IconsWrapper>
        <IconWrapper>
          <FaHeart />
        </IconWrapper>
        <IconWrapper>
          <a href={`mailto:${email}`}>
            <FaEnvelope />
          </a>
        </IconWrapper>
      </IconsWrapper>
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
