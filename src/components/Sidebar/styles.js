import styled from 'styled-components';

import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isToggle }) => (isToggle ? '100%' : '0')};
  top: ${({ isToggle }) => (isToggle ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtn = styled.button`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #ffff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  font-family: 'Roboto', sans-serif;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #ffff;
    color: #010606;
  }
`;
