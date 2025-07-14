import type { FC } from 'react';
import React from 'react';

import TopNav from '../TopNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-40 w-full bg-themeBackground py-4 shadow-2xl backdrop-blur-lg lg:py-7">
      <TopNav />
    </div>
  );
};

export default Header;
