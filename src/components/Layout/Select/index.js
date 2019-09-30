import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SelectStyled = styled.select`
  background: white;
  padding: 5px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  border: 1px solid ${({theme}) => theme.green};
  font-size: 15px;
`;

const LabelStyled = styled.label``


const Select = ({ value, options, name, handleChange }) => {
  const [opts, setOpts] = useState([]);

  useEffect(() => {
    if (typeof options === 'number') {
      let numbers = [];
      for (let i = 0; i < options; i++) {
        numbers = [...numbers, i];
      }
      setOpts(numbers);
    } else {
      setOpts(options);
    }
  }, [options]);

  return (
    <>
      <LabelStyled>category</LabelStyled>
      <SelectStyled value={value} name={name} onChange={handleChange}>
        {opts.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
    </>
  );
};

Select.propTypes = {};

export default Select;
