import React from 'react';

const Select = ({ value, options, name, form, handleChange }) => {
  return (
    <form>
      <select value={value} name={name} form={form} onChange={handleChange}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
