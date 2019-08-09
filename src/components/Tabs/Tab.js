import React from 'react';

const Tab = ({ label, onClick, activeTab }) => {
  const handleClick = () => {
    onClick(label);
  };

  let className = 'tab-list-item';

  if (activeTab === label) {
    className += ' tab-list-active';
  }

  return (
    <li className={className}>
      <button type="button" onClick={handleClick}>
        {label}
      </button>
    </li>
  );
};

export default Tab;
