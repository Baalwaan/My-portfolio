import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import CloseButtonIcon from '../../../../assets/icons/close-button.png';

const DrawerContainer = styled.div`
  background: ${props => props.bckgrnd};
  position: fixed;
  top: 0;
  right: ${props => props.burgerActive};
  transition: all 1s ease;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  display: flex
  flex-direction: column;
  justify-content: space-around;
  width: 10em;
  background:rgb(39, 158, 137);
  color: white;
  font-size: 2em;
  font-weight: bold;
  transition: all 1s ease;
  
`;

const CloseButton = styled.div`
  margin: 1em 1em 0 0;
  display: flex;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  margin: 1em auto;
  color: white;
  text-decoration: none;
  :active {
    color: rgb(247, 245, 124);
  }
`;

const Drawer = ({ bckgrnd, setBckgrnd, burgerActive, setBurgerActive }) => {
  const updateBurgerState = () => {
    setBckgrnd('transparent');
    setTimeout(() => {
      setBurgerActive('-100vw');
    }, 600);
  };

  return (
    <DrawerContainer
      onClick={updateBurgerState}
      bckgrnd={bckgrnd}
      burgerActive={burgerActive}
    >
      <Menu>
        <CloseButton>
          <img
            src={CloseButtonIcon}
            onClick={updateBurgerState}
            alt="Close Menu Button"
          />
        </CloseButton>

        <Link to="/" onClick={updateBurgerState}>
          Home
        </Link>

        <Link to="/projects" onClick={updateBurgerState}>
          Projects
        </Link>

        <Link to="/contact" onClick={updateBurgerState}>
          Contact
        </Link>
      </Menu>
    </DrawerContainer>
  );
};

export default Drawer;
