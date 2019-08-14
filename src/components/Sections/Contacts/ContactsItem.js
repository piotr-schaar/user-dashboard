import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelope, FaUser, FaHeart } from 'react-icons/fa';
import Card from 'components/Card';

import { addContactToFavorites as addToFavoriteAction } from 'actions/ContactsActions';

const WrapperStyled = styled(Card)`
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 5px;
  height: 120px;
  align-items: center;
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
const ContactsItem = ({ addToFavorite, item: { name, email, city, isFavorite }, index }) => {
  return (
    <WrapperStyled index={index}>
      <AvatarWrapper>
        <FaUser />
      </AvatarWrapper>
      <DescWrapper>
        <ParagraphStyled big>{name}</ParagraphStyled>
        <ParagraphStyled>{email}</ParagraphStyled>
        <ParagraphStyled>{city}</ParagraphStyled>
        <ParagraphStyled>{isFavorite && 'siema'}</ParagraphStyled>
      </DescWrapper>
      <IconsWrapper>
        <IconWrapper>
          <FaHeart onClick={() => addToFavorite(name, email, city)} />
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
  index: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
  addToFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addToFavorite: name => dispatch(addToFavoriteAction(name)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ContactsItem);
