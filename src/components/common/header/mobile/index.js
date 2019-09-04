import React from 'react';
import styled from 'styled-components';

import Drawer from './Drawer';

import MenuIcon from '../../../../assets/icons/burger-icon.png';

const Header = styled.nav`
  display: none;
  width: 100vw;
  z-index: 1;
  min-height: 70px;
  border-bottom: rgb(68, 166, 187) solid 4px;
  text-align: right;
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
  const [burgerActive, setBurgerActive] = React.useState('-100%');
  const [bckgrnd, setBckgrnd] = React.useState(null);

  const handleBurgerState = () => {
    setBurgerActive('0%');
    setTimeout(() => {
      setBckgrnd('rgb(105,105,105,0.6)');
    }, 800);
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
      <Drawer
        setBckgrnd={setBckgrnd}
        bckgrnd={bckgrnd}
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
      />
    </Header>
  );
};

export default MobileHeader;
