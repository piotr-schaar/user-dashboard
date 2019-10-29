import React, { useState } from 'react';
import Input from 'components/Layout/Input';

const disallowedValues = ['id'];

const useInputs = (values, callback, disallowed) => {
  const forbiddenWords = Array.isArray(disallowed) ? [...disallowed] : disallowed;

  const valuesKeys = Object.keys(values);
  const valuesEntries = Object.values(values);
  const [disallowedWords] = useState([...disallowedValues, forbiddenWords]);

  return valuesKeys.map((value, index) => {
    if (disallowedWords.indexOf(value) >= 0) {
      return null;
    }
    return (
      <Input
        key={value}
        value={valuesEntries[index]}
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
