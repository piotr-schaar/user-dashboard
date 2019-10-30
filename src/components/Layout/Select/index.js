import React from 'react';
import styled from 'styled-components';

const SelectStyled = styled.select`
  background: white;
  border-radius: 10px;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
`;

const Select = ({ value, options, name, form, handleChange }) => {
  console.log(form);
  return (
    <form>
      <SelectStyled value={value} name={name} form={form} onChange={handleChange}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
    </form>
  );
};

export default Select;
