import React from 'react';
import PropTypes from 'prop-types';

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

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
