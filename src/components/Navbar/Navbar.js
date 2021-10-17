import {
  Bars,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from './styles';

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            City Delicateseen
          </NavLogo>
          <NavIcon onClick={toggle}>
            <Bars />
          </NavIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to='pizza'
                smooth={true}
                duration={100}
                spy={true}
                exact='true'
                offset={-80}
              >
                Pizza
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='sandwiches'
                smooth={true}
                duration={100}
                spy={true}
                exact='true'
                offset={-80}
              >
                Sandwiches
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
