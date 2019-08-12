import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Tab from './Tab';

const WrapperStyled = styled.div``;

const TabsListStyled = styled.ol`
  display: flex;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-left: 0;
  height: 100%;
`;

const TabContent = styled.div`
  transition: all 2s ease;
  ${({ scroll }) =>
    scroll &&
    css`
      overflow-y: auto;
    `}
`;
const Tabs = ({ children, scroll }) => {
  const [activeTab, setActive] = useState(children[0].props.label);

  const onClickTabItem = tab => setActive(tab);

  return (
    <WrapperStyled>
      <TabsListStyled>
        {children.map(({ props: { label } }) => {
          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
        })}
      </TabsListStyled>
      <TabContent scroll={scroll}>
        {children.map(({ props: { label, children: childs } }) => {
          if (label !== activeTab) return undefined;
          return childs;
        })}
      </TabContent>
    </WrapperStyled>
  );
};
Tabs.defaultProps = {
  scroll: false,
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
    .isRequired,
  scroll: PropTypes.bool,
};

export default Tabs;
