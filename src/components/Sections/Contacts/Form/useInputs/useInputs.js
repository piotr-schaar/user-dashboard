import React, { useState } from 'react';
import Input from 'components/Layout/Input';

const disallowedValues = ['id'];

const useInputs = (values, callback, disallowed) => {
  const forbiddenWords = Array.isArray(disallowed) ? [...disallowed] : disallowed;

  const valuesArray = Object.keys(values);
  const [disallowedWords] = useState([...disallowedValues, forbiddenWords]);

  return valuesArray.map(value => {
    if (disallowedWords.indexOf(value) >= 0) {
      return null;
    }
    return (
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
    );
  });
};

export default useInputs;
