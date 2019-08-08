import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading';

const SidebarWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  width: 100px;
  height: 100%;
  background: #364063;
`;

const SidebarHeading = styled(Heading)`
  padding-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Sidebar = () => {
  return <SidebarWrapper />;
};

export default Sidebar;
