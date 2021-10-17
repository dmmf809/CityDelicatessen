import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarBtn,
} from './styles';

const Sidebar = ({ isToggle, toggle }) => {
  const handleClick = () => {
    alert('Contact: (402) 373-8189');
  };

  return (
    <>
      <SidebarContainer isToggle={isToggle} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to='pizza' onClick={toggle}>
            Pizzas
          </SidebarLink>
          <SidebarLink to='sandwiches' onClick={toggle}>
            Sandwiches
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtn onClick={handleClick}>Call to order</SidebarBtn>
        </SidebarBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
