import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import Input from 'components/Input';
import { registerUser as registerAction } from 'actions/UserActions';
import { connect } from 'react-redux';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
  height: 20px;
  width: 300px;
`;

const RegisterPage = ({ register, UserReducer: { isError } }) => {
  return (
    <>
      {isError && <p>error</p>}
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          register(username, password);
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          return (
            <>
              <h1>Sign up</h1>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <button type="submit">Register</button>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(registerAction(username, password)),
});

const mapStateToProps = ({ UserReducer }) => ({
  UserReducer,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);
