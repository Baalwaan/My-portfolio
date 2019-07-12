import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as CloseButton } from '../../../assets/close-button.svg';

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background: black;
  color: white;
  font-size: 2em;
`;

const MenuContainer = styled.div`
  margin: 1em;
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.p`
  margin: 1em auto;
`;

const Drawer = () => {
  return (
    <>
      <Container>
        <MenuContainer>
          <CloseButton />
        </MenuContainer>

        <Link>Home</Link>

        <Link>About Me</Link>

        <Link>Projects</Link>

        <Link>Contact</Link>
      </Container>
    </>
  );
};

export default Drawer;
