import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.nav`
  display: none;
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 70px;
  border-bottom: black solid 1px;
  text-align: right;
  background-color: black;
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const Links = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  }
`;

const DesktopHeader = () => {
  const abc = 'hi';

  return (
    <Header>
      <Links to="/">Home</Links>
      <Links to="/about">About me</Links>
      <Links to="/projects">Projects</Links>
      <Links to="/contact">Contact</Links>
    </Header>
  );
};

export default DesktopHeader;
