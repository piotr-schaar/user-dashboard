import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tab from './Tab';

const WrapperStyled = styled.div``;

const TabsListStyled = styled.ol`
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: 0;
`;

const TabContent = styled.div``;
const Tabs = ({ children }) => {
  const [activeTab, setActive] = useState(children[0].props.label);

  const onClickTabItem = tab => setActive(tab);

  return (
    <WrapperStyled>
      <TabsListStyled>
        {children.map(({ props: { label } }) => {
          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
        })}
      </TabsListStyled>
      <TabContent>
        {children.map(({ props: { label, children: childs } }) => {
          if (label !== activeTab) return undefined;
          return childs;
        })}
      </TabContent>
    </WrapperStyled>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
    .isRequired,
};

export default Tabs;
