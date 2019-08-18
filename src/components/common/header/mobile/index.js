import React from 'react';
import styled from 'styled-components';

import Drawer from './Drawer';

import { ReactComponent as MenuIcon } from '../../../../assets/icons/burger-icon.svg';

const Header = styled.nav`
  display: none;
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 70px;
  border-bottom: black solid 1px;
  text-align: right;
  background-color: white;
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
        <MenuIcon onClick={handleBurgerState} />
      </MenuContainer>
      <Drawer burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </Header>
  );
};

export default MobileHeader;
