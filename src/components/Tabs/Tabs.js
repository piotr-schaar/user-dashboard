import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ children }) => {
  const [activeTab, setActive] = useState(children[0].props.label);

  const onClickTabItem = tab => {
    setActive(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map(child => {
          const { label } = child.props;
          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
        })}
      </ol>
      <div className="tab-content">
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
    .isRequired,
};

export default Tabs;
