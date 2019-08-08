import { useState } from 'react';

const validateForm = values => {
  const errors = [];

  if (!values.username) {
    errors.push('Please enter username');
  }

  return errors;
};

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    setErrors(validateForm(values));
  };

  return [updateValue, values, submitForm, errors];
};

export default useForm;
