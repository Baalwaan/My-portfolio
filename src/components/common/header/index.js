import React from 'react';
import styled from 'styled-components';

import Drawer from './Drawer';

import { ReactComponent as MenuIcon } from '../../../assets/burger-icon1.svg';

const StyledHeader = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 70px;
  color: white;
  border-bottom: black solid 1px;
  text-align: right;
`;

const MenuContainer = styled.div`
  margin: 1em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <MenuContainer>
        <MenuIcon />
      </MenuContainer>
      {/* <Drawer /> */}
    </StyledHeader>
  );
};

export default Header;
