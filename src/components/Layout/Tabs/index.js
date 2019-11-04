import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Tab from '../Tab';

const WrapperStyled = styled.div``;

const TabsListStyled = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-left: 0;
`;

const TabContent = styled.div`
  transition: all 0.3s ease;
  opacity: ${({ toggle }) => (toggle ? 0 : 1)};

  ${({ scroll }) =>
    scroll &&
    css`
      overflow-y: auto;
    `}
`;

const Tabs = ({ children, scroll, color }) => {
  const [activeTab, setActive] = useState(children[0].props.label);
  const [toggleAnimation, setToggleAnimation] = useState(false);

  const onClickTabItem = tab => {
    setToggleAnimation(true);
    setTimeout(() => {
      setActive(tab);
      setToggleAnimation(false);
    }, 300);
  };

  return (
    <WrapperStyled>
      <TabsListStyled>
        {children.map(({ props: { label } }) => {
          return (
            <Tab
              color={color}
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </TabsListStyled>
      <TabContent toggle={toggleAnimation} scroll={scroll}>
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
  color: 'red',
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
    .isRequired,
  scroll: PropTypes.bool,
  color: PropTypes.string,
};

export default Tabs;
