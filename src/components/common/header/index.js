import React from 'react';

import MobileHeader from './mobile';
import DesktopHeader from './desktop';

const Header = ({ isHomePage }) => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
};

export default Header;
