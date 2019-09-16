import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { registerUser as registerAction, auth as authAction } from 'redux/User/User.actions';
import Input from 'components/Layout/Input';
import Heading from 'components/Layout/Heading';
import Button from 'components/Layout/Button';
import AuthTemplate from 'templates/AuthTemplate';
import useForm from 'hooks/useForm';
import Alert from '../components/Layout/Alert';

const fadeIn = keyframes`
   from {
     opacity: 0;
     bottom: -10px;
   } 
   to {
     opacity: 1;
     bottom: 0;
   }
`;

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

const MessagesStyled = styled.div`
  position: relative;
  animation: ${fadeIn} 1s ease-in-out;
`;

const AuthPage = ({ authLogin, authRegister }) => {
  const loginType = true;

  const [updateValue, values, submitForm, errors] = useForm({
    username: '',
    password: '',
  });
  const [authType, setAuthType] = useState(loginType);
  const [isRegister, setRegister] = useState(false);

  const submitFunc = e => {
    e.preventDefault();
    submitForm();
    const { username, password } = values;
    if (errors.length === 0) {
      if (authType) {
        authLogin(username, password);
      } else {
        setRegister(true);
        authRegister(username, password);
      }
    }
  };

  const setAuth = () => {
    setAuthType(!authType);
    errors.length = 0;
  };

  return (
    <AuthTemplate>
      {authType ? <Heading big>sign in</Heading> : <Heading big>sign up</Heading>}

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
          {authType ? 'log in' : 'register'}
        </Button>
        <ChangeAuthButton type="button" onClick={setAuth}>
          {authType ? 'create new account' : 'already have a account? Log in'}
        </ChangeAuthButton>
        {errors && (
          <MessagesStyled>
            {errors.map(err => (
              <Alert type="warning" key={err}>
                {err}
              </Alert>
            ))}
          </MessagesStyled>
        )}
        {isRegister && (
          <MessagesStyled>
            <Alert type="info">You can log now</Alert>
          </MessagesStyled>
        )}
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
