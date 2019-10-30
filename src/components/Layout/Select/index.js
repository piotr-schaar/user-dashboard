import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectStyled = styled.select`
  background: white;
  border-radius: 10px;
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
`;

const Select = ({ value, options, name, handleChange }) => {
  return (
    <form>
      <SelectStyled value={value} name={name} onChange={handleChange}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
    </form>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
