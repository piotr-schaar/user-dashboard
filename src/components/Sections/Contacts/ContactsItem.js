import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  padding: 12px;
  width: 100%;
  border-bottom: 2px solid rgba(73, 85, 124, 0.4);
  display: flex;
  align-items: center;
  :last-of-type {
    border: 0;
  }
`;
const ParagraphStyled = styled.div`
  font-weight: 400;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.s : theme.fontSize.xs)};
  padding-bottom: ${({ big }) => big && '10px'};
`;

const DescWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;
const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: grey;
`;

const ContactsItem = ({ item: { name, email }, index }) => {
  return (
    <WrapperStyled index={index}>
      <IconWrapper />
      <DescWrapper>
        <ParagraphStyled big>{name}</ParagraphStyled>
        <ParagraphStyled>{email}</ParagraphStyled>
      </DescWrapper>
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
