import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { addContact as addContactAction } from 'actions/ContactsActions';
import { FaUserPlus } from 'react-icons/fa';

import { Form } from 'components/Form';
import Heading from 'components/Heading';
import Input from 'components/Input';

import Button from 'components/Button';

import useForm from 'hooks/useForm';

const WrapperStyled = styled.div`
  border: 2px solid ${({ theme }) => theme.green};
  border-bottom: none;
  border-radius: 15px 15px 0 0;
  padding: 10px 25px;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(0);
    `}
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(0);
    `}
`;

const SubmitButton = styled(Button)`
  margin-top: 15px;
  width: 50%;
`;

const ContactAddForm = ({ addContact }) => {
  const [isFormShown, setShow] = useState(false);
  const [updateValue, values, submitForm] = useForm({
    name: '',
    email: '',
    city: '',
  });
  const submitFunc = e => {
    e.preventDefault();
    submitForm();

    const { name, email } = values;
    addContact(name, email);
  };

  return (
    <WrapperStyled>
      <Heading small>Add contact</Heading>
      <FormStyled isShown={isFormShown} onSubmit={submitFunc}>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          required
          onChange={updateValue}
          onBlur={updateValue}
        />
        <Input
          name="email"
          type="text"
          required
          onChange={updateValue}
          onBlur={updateValue}
          placeholder="email"
        />
        <Input
          name="city"
          type="text"
          onChange={updateValue}
          onBlur={updateValue}
          placeholder="city"
        />

        <SubmitButton type="submit">add</SubmitButton>
      </FormStyled>
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
