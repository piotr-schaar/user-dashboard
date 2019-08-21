import React, { useState } from 'react';

const useSelectOptions = (value, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const SelectList = () => (
    <select
      id={value}
      onChange={e => setState(e.target.value)}
      onBlur={e => setState(e.target.value)}
      disabled={options.length === 0}
    >
      <option>All</option>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );

  return [state, SelectList, setState];
};

export default useSelectOptions;
