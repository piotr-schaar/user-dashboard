import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import Input from 'components/Input';

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
const LoginPage = () => {
  return (
    <>
      <Formik initialValues={{ name: '', password: '' }} onSubmit={() => console.log('siemson')}>
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
                <button type="submit">Register</button>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
