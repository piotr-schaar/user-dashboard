import { useState } from 'react';

const validateForm = values => {
  const errors = [];

  switch (values) {
    case !values.username:
      errors.push('Please enter username');
      break;
    case values.name.length < 3:
      errors.push('Name should contain at least 3 letters');
      break;
    default:
      return errors;
  }
  return errors;
};

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const submitForm = () => {
    setErrors(validateForm(values));

    setValues(initialValues);
  };

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [updateValue, values, submitForm, errors];
};

export default useForm;
