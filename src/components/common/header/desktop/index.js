import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.nav`
  color: white;
  display: none;
  // position: absolute;
  // top: 0;
  width: 100vw;
  z-index: 1;
  border-bottom: rgb(68, 166, 187) solid 4px;
  text-align: right;
  background-color: rgb(16, 61, 16);
  @media (min-width: 650px) {
    display: block;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  top: 0;
  width: 50%;
  z-index: 1;
  text-align: right;
`;

const Link = styled(NavLink)`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  border-bottom: solid 2px transparent;
  margin: 1em 0 1em 0.4em;
  :hover {
    color: rgb(247, 245, 124);
    border-bottom: solid 2px rgb(247, 245, 124);
  }
`;

const DesktopHeader = () => {
  return (
    <Header>
      <MenuContainer>
        <Link to="/#/" title="Home">
          Home
        </Link>
        <Link to="/#about-me" title="About Me Page">
          About me
        </Link>
        <Link to="/projects" title="Projects Page">
          Projects
        </Link>
        <Link to="/contact" title="Contact Page">
          Contact
        </Link>
      </MenuContainer>
    </Header>
  );
};

export default DesktopHeader;
