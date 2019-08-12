import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { addContact as addContactAction } from 'actions/ContactsActions';

import useForm from 'hooks/useForm';

const WrapperStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
`;

const FormStyled = styled.form`
  z-index: -10;
  transform: translateY(205%);
  transition: all 0.3s ease-in;
  background: red;
  height: 50px;
  width: 100%;
  ${({ isShown }) =>
    isShown &&
    css`
      transform: translateY(0);
    `}
`;

const ToolsWrapper = styled.div`
  position: relative;
  background: black;
  padding: 15px;
  display: flex;
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
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={updateValue}
          onBlur={updateValue}
        />
        <input
          name="email"
          type="text"
          onChange={updateValue}
          onBlur={updateValue}
          placeholder="email"
        />
        <button type="submit">add</button>
      </FormStyled>
      <ToolsWrapper>
        <button type="button" onClick={() => setShow(!isFormShown)}>
          Add Contact
        </button>
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
