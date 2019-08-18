import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import CloseButton from '../../../../assets/icons/close-button.png';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.burgerActive};
  display: flex
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  // background-color: black;
  background:rgb(39, 158, 137);
  color: white;
  font-size: 2em;
  font-weight: bold;
  transition: all 1s ease;
  z-index:1;
`;

const MenuContainer = styled.div`
  margin: 0 1em;
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

const Drawer = ({ burgerActive, setBurgerActive }) => {
  const updateBurgerState = () => {
    setBurgerActive('100vw');
  };

  return (
    <>
      <Container burgerActive={burgerActive}>
        <MenuContainer>
          <img
            src={CloseButton}
            onClick={updateBurgerState}
            alt="Close Menu Button"
          />
        </MenuContainer>

        <Link to="/" onClick={updateBurgerState}>
          Home
        </Link>

        <Link to="/#about-me" onClick={updateBurgerState}>
          About Me
        </Link>

        <Link to="/projects" onClick={updateBurgerState}>
          Projects
        </Link>

        <Link to="/contact" onClick={updateBurgerState}>
          Contact
        </Link>
      </Container>
    </>
  );
};

export default Drawer;
