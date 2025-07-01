import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '@/images/devsherelogo.svg';

const Logo: React.FC = () => {
  return (
    <Link className="cursor-pointer" href="/">
      <Image src={logo} alt="logo" className="h-10 w-auto sm:h-10 " />
    </Link>
  );
};

export default Logo;
