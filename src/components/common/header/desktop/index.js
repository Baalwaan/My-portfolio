import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = styled.nav`
  color: white;
  display: none;
  position: sticky;
  top: 0;
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
  display: flex;
  position: sticky;
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
  margin: 1em;
  :hover {
    color: rgb(247, 245, 124);
    border-bottom: solid 2px rgb(247, 245, 124);
  }
`;

const StyledHashLink = styled(HashLink)`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  border-bottom: solid 2px transparent;
  margin: 1em;
  :hover {
    color: rgb(247, 245, 124);
    border-bottom: solid 2px rgb(247, 245, 124);
  }
`;

const DesktopHeader = () => {
  // console.log('this is , ', window.location.href);
  return (
    <Header>
      <MenuContainer>
        <StyledHashLink to="/#/" title="Home">
          Home
        </StyledHashLink>
        <StyledHashLink to="/#aboutme" title="About Me Page">
          About me
        </StyledHashLink>
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
