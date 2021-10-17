import {
  Bars,
  Nav,
  NavbarContainer,
  NavButton,
  NavButtonWrap,
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
  const handleClick = () => {
    alert('Contact: (402) 373-8189');
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
            <NavItem>
              <NavButtonWrap>
                <NavButton onClick={handleClick}>Call to order</NavButton>
              </NavButtonWrap>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
