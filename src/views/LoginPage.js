import React from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/Input';
import { auth as authAction } from 'actions/UserActions';
import PropTypes from 'prop-types';
import { routes } from '../routes';
import AuthTemplate from '../templates/AuthTemplate';
import Heading from '../components/Heading';
import Button from '../components/Button';

const StyledForm = styled(Form)`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
`;

const LoginPage = ({ auth, userID }) => {
  return (
    <AuthTemplate>
      <Heading big>sign in</Heading>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          auth(username, password);
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          return (
            <>
              <StyledForm autoComplete="off">
                <StyledInput
                  id="username"
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
                <Button type="submit">Login</Button>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.defaultProps = {
  userID: null,
};

LoginPage.propTypes = {
  auth: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

const mapStateToProps = ({ UserReducer: { userID = null } }) => ({
  userID,
});

const mapDispatchToProps = dispatch => ({
  auth: (username, password) => dispatch(authAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
