'use client';

import Image from 'next/image';

import { companyLogos } from '@/data/content';

function Companies() {
  return (
    <div className="container-custom py-10">
      <div className="flex flex-col items-center justify-between gap-y-3 text-themeTextPrimary lg:flex-row lg:gap-y-0">
        <p className="font-medium lg:w-[25%] 2xl:text-xl">
          Trusted by 1000+ companies and teams
        </p>
        <div className="h-px w-full bg-themeSurfaceLight lg:w-[75%]" />
      </div>
      <div className="flex w-full items-center justify-between">
        {companyLogos.map((logo) => (
          <Image
            key={logo.src}
            src={logo}
            alt="logo"
            className="w-[13%] object-cover grayscale"
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
