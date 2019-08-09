import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  padding: 12px;
  border-bottom: 2px solid #49557c;
  :last-of-type {
    border: 0;
  }
`;
const ParagraphStyled = styled.div`
  font-weight: 400;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.s : theme.fontSize.xs)};
  padding-bottom: ${({ big }) => big && '10px'};
`;

const ContactsItem = ({ item: { name, email }, index }) => {
  return (
    <WrapperStyled index={index}>
      <ParagraphStyled big>{name}</ParagraphStyled>
      <ParagraphStyled>{email}</ParagraphStyled>
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
