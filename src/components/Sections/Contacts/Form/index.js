import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { addContact as addContactAction } from 'redux/Contacts/Contacts.actions';

import Form from 'components/Layout/Form';
import Heading from 'components/Layout/Heading';

import Button from 'components/Layout/Button';

import useForm from 'hooks/useForm';
import Card from 'components/Layout/Card';
import useInputs from './useInputs/useInputs';

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

const ContactAddForm = () => {
  const dispatch = useDispatch();
  const [updateValue, values, submitForm, errors] = useForm({
    name: '',
    email: '',
    city: '',
  });

  const FormInputs = useInputs(values, updateValue);

  const handleSubmit = e => {
    e.preventDefault();
    submitForm();

    const { name, email, city } = values;
    dispatch(addContactAction(name, email, city));
  };

  return (
    <Card>
      {errors && errors.map(error => <p>{error}</p>)}
      <Heading small>Add contact</Heading>
      <FormStyled onSubmit={handleSubmit}>
        {FormInputs}
        <SubmitButton type="submit">add</SubmitButton>
      </FormStyled>
    </Card>
  );
};

export default ContactAddForm;
