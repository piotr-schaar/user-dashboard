import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { Contact } from 'constants/index';
import { addContact as addContactAction } from 'redux/Contacts/Contacts.actions';

import { Form, Heading, Button, Card } from 'components/Layout';

import useForm from 'hooks/useForm';
import useInputs from 'hooks/useInputs';

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
  const [updateValue, values, submitForm, errors] = useForm(new Contact());

  const FormInputs = useInputs(values, updateValue, 'isFavorite');

  const handleSubmit = e => {
    e.preventDefault();
    submitForm();
    dispatch(addContactAction(values));
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
