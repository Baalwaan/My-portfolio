import React from 'react';
import styled from 'styled-components';

import Drawer from './Drawer';
import DesktopHeader from './desktop';

import { ReactComponent as MenuIcon } from '../../../assets/burger-icon1.svg';

const MobileHeader = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 70px;
  border-bottom: black solid 1px;
  text-align: right;
`;

const MenuContainer = styled.div`
  margin: 1em;
  cursor: pointer;
`;

const Header = () => {
  const [burgerActive, setBurgerActive] = React.useState('100vw');

  const handleBurgerState = () => {
    setBurgerActive('0vw');
  };

  return (
    <>
      <MobileHeader>
        <MenuContainer>
          <MenuIcon onClick={handleBurgerState} />
        </MenuContainer>
        <Drawer burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
      </MobileHeader>
      <DesktopHeader />
    </>
  );
};

export default Header;
