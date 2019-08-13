import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { addContact as addContactAction } from 'actions/ContactsActions';
import { FaUserPlus } from 'react-icons/fa';
import Button from 'components/Button';

import useForm from 'hooks/useForm';

const WrapperStyled = styled.div`
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 15px;
  padding: 15px;
  margin: 0 25px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(0);
    `}
`;

const FormInput = styled.input``;

const ToolsWrapper = styled.div``;

const ToolButton = styled.button``;

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
        <FormInput
          name="city"
          type="text"
          onChange={updateValue}
          onBlur={updateValue}
          placeholder="city"
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
