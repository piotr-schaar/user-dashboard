import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/Input';
import { auth as authAction } from 'actions/UserActions';
import PropTypes from 'prop-types';

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

const LoginPage = ({ auth, UserReducer }) => {
  return (
    <>
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={({ username, password }) => {
          auth(username, password);
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
                  type="text"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <button type="submit">Login</button>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};

const mapStateToProps = ({ UserReducer }) => ({
  UserReducer,
});

const mapDispatchToProps = dispatch => ({
  auth: (username, password) => dispatch(authAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
