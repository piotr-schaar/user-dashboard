import React from 'react';
import styled from 'styled-components';
import { FaAddressBook, FaUser, FaTasks, FaFile, FaCogs, FaSignOutAlt } from 'react-icons/fa';

const SidebarWrapper = styled.div`
  position: absolute;
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
  color: #b8b4cb;
  padding: 20px;
  border-radius: 15%;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    padding: 18px;
    border: 2px solid ${({ theme }) => theme.greenOpacity};
    color: ${({ theme }) => theme.green};
    box-shadow: 9px 9px 4px -12px rgba(0, 0, 0, 0.4);
  }
`;
const AvatarWrapper = styled.div`
  color: #b8b4cb;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  padding: 25px;
  border-radius: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <>
        <ListStyled>
          <ItemStyled>
            <AvatarWrapper>
              <FaUser />
            </AvatarWrapper>
          </ItemStyled>
          <ItemStyled>
            <IconWrapper>
              <FaAddressBook />
            </IconWrapper>
          </ItemStyled>
          <ItemStyled>
            <IconWrapper>
              <FaTasks />
            </IconWrapper>
          </ItemStyled>
          <ItemStyled>
            <IconWrapper>
              <FaFile />
            </IconWrapper>
          </ItemStyled>
          <ItemStyled>
            <IconWrapper>
              <FaCogs />
            </IconWrapper>
          </ItemStyled>
          <ItemStyled>
            <IconWrapper>
              <FaSignOutAlt />
            </IconWrapper>
          </ItemStyled>
        </ListStyled>
      </>
    </SidebarWrapper>
  );
};

export default Sidebar;
