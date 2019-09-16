import { useState } from 'react';

const validateForm = values => {
  const errors = [];

  switch (values) {
    case !values.username:
      return errors.push('Please enter username');
    case values.name.length < 3:
      return errors.push('Name should contain at least 3 letters');
    default:
      return errors;
  }
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
  console.log(errors);

  return [updateValue, values, submitForm, errors];
};

export default useForm;
