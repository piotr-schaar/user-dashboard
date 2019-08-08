import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import { registerUser as registerAction, auth as authAction } from 'actions/UserActions';
import { connect } from 'react-redux';
import Heading from 'components/Heading';
import Button from 'components/Button';
import AuthTemplate from 'templates/AuthTemplate';
import useForm from 'hooks/useForm';

const StyledForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
`;

const ChangeAuthButton = styled(Button)`
  margin-top: 25px;
  background: ${({ theme }) => theme.light};
  border: none;
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const AuthPage = ({ authLogin, authRegister }) => {
  const loginType = true;

  const [updateValue, values, submitForm, errors] = useForm({
    username: '',
    password: '',
  });
  const [authType, setAuthType] = useState(loginType);

  const submitFunc = e => {
    e.preventDefault();
    submitForm();
    const { username, password } = values;
    if (errors.length === 0) {
      return authType ? authLogin(username, password) : authRegister(username, password);
    }
    return null;
  };

  const setAuth = () => setAuthType(!authType);

  return (
    <AuthTemplate>
      {authType ? <Heading big>Sign in</Heading> : <Heading big>Sign Up</Heading>}

      <StyledForm onSubmit={submitFunc}>
        <StyledInput
          type="text"
          name="username"
          placeholder="login"
          onChange={updateValue}
          onBlur={updateValue}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="password"
          onChange={updateValue}
          onBlur={updateValue}
        />
        <Button big type="submit">
          {authType ? 'login' : 'register'}
        </Button>
        <ChangeAuthButton type="button" onClick={setAuth}>
          {authType ? 'create new account' : 'already have a accout? Log in'}
        </ChangeAuthButton>
        {errors && errors.map(err => <p key={err}>{err}</p>)}
      </StyledForm>
    </AuthTemplate>
  );
};

AuthPage.propTypes = {
  authRegister: PropTypes.func.isRequired,
  authLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  authRegister: (username, password) => dispatch(registerAction(username, password)),
  authLogin: (username, password) => dispatch(authAction(username, password)),
});

const mapStateToProps = ({ UserReducer }) => ({
  UserReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthPage);
