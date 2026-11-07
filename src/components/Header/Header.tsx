import type { FC } from 'react';
import React from 'react';

import TopNav from '../TopNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-40 w-full border-b border-bone/10 bg-ink/70 py-3 backdrop-blur-xl backdrop-saturate-150 lg:py-4">
      <TopNav />
    </div>
  );
};

export default Header;
