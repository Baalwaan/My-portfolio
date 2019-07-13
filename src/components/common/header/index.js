import React from 'react';

import MobileHeader from './mobile';
import DesktopHeader from './desktop';

const Header = () => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
};

export default Header;
