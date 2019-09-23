import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes';

import { FaAddressBook, FaUser, FaTasks, FaFile, FaCogs, FaSignOutAlt } from 'react-icons/fa';

const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  padding: 15px;
  background: ${({ theme }) => theme.white};
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 9px 9px 4px -12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;

const ItemStyled = styled.li`
  margin: 5px 0;
  padding: 15px;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b8b4cb;
  width: 75px;
  height: 75px;
  border-radius: 15%;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.greenOpacity};
    color: ${({ theme }) => theme.green};
    box-shadow: 9px 9px 4px -12px rgba(0, 0, 0, 0.4);
  }
  a {
    color: inherit;
  }
`;
const AvatarWrapper = styled.div`
  color: #b8b4cb;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  width: 75px;
  height: 75px;
  border-radius: 20px;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const navLinks = [
  {
    href: routes.contacts,
    icon: () => <FaAddressBook />,
  },
  {
    href: routes.tasks,
    icon: () => <FaTasks />,
  },
  {
    href: routes.settings,
    icon: () => <FaCogs />,
  },
  {
    href: routes.logout,
    icon: () => <FaSignOutAlt />,
  },
];

const Sidebar = ({ avatar }) => {
  return (
    <SidebarWrapper>
      <>
        <ListStyled>
          <ItemStyled>
            <NavLink to={routes.home}>
              <AvatarWrapper avatar={avatar}>{!avatar && <FaUser />}</AvatarWrapper>
            </NavLink>
          </ItemStyled>
          {navLinks.map(item => (
            <ItemStyled key={item.href}>
              <NavLink to={item.href}>
                <IconWrapper>{item.icon()}</IconWrapper>
              </NavLink>
            </ItemStyled>
          ))}
        </ListStyled>
      </>
    </SidebarWrapper>
  );
};

const mapStateToProps = ({ UserReducer }) => UserReducer;

export default connect(mapStateToProps)(Sidebar);
