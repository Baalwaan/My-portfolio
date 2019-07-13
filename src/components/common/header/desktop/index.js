import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.nav`
  //   display: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 70px;
  border-bottom: black solid 1px;
  text-align: right;
  background-color: black;
`;

const Links = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
`;

const DesktopHeader = () => {
  const abc = 'hi';

  return (
    <Header>
      <Links>Home</Links>
      <Links>About me</Links>
      <Links>Projects</Links>
      <Links>Contact</Links>
    </Header>
  );
};

export default DesktopHeader;
