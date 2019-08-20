import React from 'react';
import styled from 'styled-components';

import Drawer from './Drawer';

import MenuIcon from '../../../../assets/icons/burger-icon.png';

const Header = styled.nav`
  display: none;
  // position: absolute;
  width: 100vw;
  // top: 0;
  z-index: 1;
  min-height: 70px;
  // border-bottom: black solid 1px;
  border-bottom: rgb(68, 166, 187) solid 4px;
  text-align: right;
  // background-color: white;
  background-color: rgb(16, 61, 16);
  @media (max-width: 649px) {
    display: block;
  }
`;

const MenuContainer = styled.div`
  padding: 1em;
  cursor: pointer;
`;

const MobileHeader = () => {
  const [burgerActive, setBurgerActive] = React.useState('100vw');

  const handleBurgerState = () => {
    setBurgerActive('0vw');
  };
  return (
    <Header>
      <MenuContainer>
        <img
          src={MenuIcon}
          onClick={handleBurgerState}
          alt="Open Menu Button"
        />
      </MenuContainer>
      <Drawer burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </Header>
  );
};

export default MobileHeader;
