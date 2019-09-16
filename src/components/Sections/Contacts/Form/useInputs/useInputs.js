import React from 'react';
import Input from 'components/Layout/Input';

const useInputs = (values, callback) => {
  const valuesArray = Object.keys(values);
  return valuesArray.map(value => (
    <Input
      key={value}
      id={value}
      name={value}
      type="text"
      required
      placeholder={value}
      onChange={callback}
      onBlur={callback}
    />
  ));
};

export default useInputs;
