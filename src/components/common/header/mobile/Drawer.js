import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as CloseButton } from '../../../../assets/icons/close-button.svg';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.burgerActive};
  display: flex
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  font-size: 2em;
  font-weight: bold;
  transition: all 1s ease;
`;

const MenuContainer = styled.div`
  margin: 0 1em;
  display: flex;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  margin: 1em auto;
  color: lightgray;
  text-decoration: none;
  :active {
    color: white;
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
          <CloseButton onClick={updateBurgerState} />
        </MenuContainer>

        <Link to="/" onClick={updateBurgerState}>
          Home
        </Link>

        <Link to="/about" onClick={updateBurgerState}>
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
