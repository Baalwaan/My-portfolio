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

const Link = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  color: lightgray;
  text-decoration: none;
  border-bottom: solid 1px transparent;
  :hover {
    color: white;
    border-bottom: solid white 2px;
  }
`;

const DesktopHeader = () => {
  return (
    <Header>
      <Link to="/">Home</Link>
      <Link to="/about">About me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </Header>
  );
};

export default DesktopHeader;
