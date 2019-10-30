import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope, FaUser, FaHeart } from 'react-icons/fa';
import { Card } from 'components/Layout';

import { handleContactToFavorites as handleFavoriteAction } from 'redux/Contacts/Contacts.actions';

const WrapperStyled = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 5px;
  height: 150px;
  padding: 0 15px;
  align-items: center;
  width: 300px;
  margin: 5px;
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
  color: ${({ theme, isFavorite }) => (isFavorite ? 'red' : theme.green)};
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
const ContactsItem = ({ item: { name, email, city, isFavorite }, index }) => {
  const dispatch = useDispatch();

  return (
    <WrapperStyled index={index}>
      <AvatarWrapper>
        <FaUser />
      </AvatarWrapper>
      <DescWrapper>
        <ParagraphStyled big>{name}</ParagraphStyled>
        <ParagraphStyled>{email}</ParagraphStyled>
        <ParagraphStyled>{city}</ParagraphStyled>
      </DescWrapper>
      <IconsWrapper>
        <IconWrapper isFavorite={isFavorite}>
          <FaHeart onClick={() => dispatch(handleFavoriteAction(name, isFavorite))} />
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
  isFavorite: false,
};

ContactsItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  isFavorite: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

export default ContactsItem;
