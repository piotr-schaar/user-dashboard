import { useState, useEffect } from 'react';

const validateForm = values => {
  const errors = [];

  if (!values.username) {
    errors.push('Please enter username');
  }

  if (!values.password < 5) {
    errors.push('Password is too short');
  }
  return errors;
};

const useForm = initial => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(validateForm(values));
    validateForm(values);
  }, [values]);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [updateValue, values, errors];
};

export default useForm;
