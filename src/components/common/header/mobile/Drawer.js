import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as CloseButton } from '../../../../assets/close-button.svg';

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

        <Link to="/">Home</Link>

        <Link to="/about">About Me</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>
      </Container>
    </>
  );
};

export default Drawer;
