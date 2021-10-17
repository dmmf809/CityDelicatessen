import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: rgba(97, 88, 88, 0.5);
  //background: rgba(21, 15, 15, 0.5);
  height: 80px;
  margin-top: -80px;
  position: sticky;
  display: flex;
  justify-content: center;
  font-weight: 700;
  z-index: 10;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  color: #ffff;
  font-family: 'Pattaya', sans-serif;
  justify-self: flex-start;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  cursor: pointer;
  text-decoratiion: none;
`;

export const NavLink = styled(Link)`
  color: #ffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #e31837;
  }

  &.active {
    border-bottom: 3px solid #e31837;
  }
`;

export const NavIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #ffff;
  }

  &:hover {
    color: #e31837;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavButtonWrap = styled.div`
  padding-top: 15px;
`;

export const NavButton = styled.button`
  background: #e31837;
  padding: 13px 10px;
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
    background: #ffc500;
    color: #010606;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
