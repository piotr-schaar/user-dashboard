import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { addContact as addContactAction } from 'actions/ContactsActions';
import { FaUserPlus } from 'react-icons/fa';
import Button from 'components/Button';

import useForm from 'hooks/useForm';

const WrapperStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 100%;
`;

const FormStyled = styled.form`
  position: relative;
  z-index: -100;
  transform: translateY(100%);
  transition: all 0.3s ease-in;
  border-top: 2px solid ${({ theme }) => theme.green};
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(0);
    `}
`;

const FormInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.green};
  width: 100%;
`;

const ToolsWrapper = styled.div`
  position: relative;
  cursor: pointer;
  background: ${({ theme }) => theme.green};
  padding: 15px;
  display: flex;
  justify-content: center;
`;

const ToolButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #232a40;
  }
`;

const ContactAddForm = ({ addContact }) => {
  const [isFormShown, setShow] = useState(false);
  const [updateValue, values, submitForm] = useForm({
    name: '',
    email: '',
  });
  const submitFunc = e => {
    e.preventDefault();
    submitForm();

    const { name, email } = values;
    addContact(name, email);
  };

  return (
    <WrapperStyled>
      <FormStyled isShown={isFormShown} onSubmit={submitFunc}>
        <FormInput
          name="name"
          type="text"
          placeholder="name"
          onChange={updateValue}
          onBlur={updateValue}
        />
        <FormInput
          name="email"
          type="text"
          onChange={updateValue}
          onBlur={updateValue}
          placeholder="email"
        />
        <Button type="submit">add</Button>
      </FormStyled>
      <ToolsWrapper>
        <ToolButton type="button" onClick={() => setShow(!isFormShown)}>
          <FaUserPlus />
        </ToolButton>
      </ToolsWrapper>
    </WrapperStyled>
  );
};

const mapDispatchToProps = dispatch => ({
  addContact: (username, email) => dispatch(addContactAction(username, email)),
});

ContactAddForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default connect(
  null,
  mapDispatchToProps,
)(ContactAddForm);
