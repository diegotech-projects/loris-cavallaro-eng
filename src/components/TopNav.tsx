'use client';

import { BsFillHeartFill } from 'react-icons/bs';

import MenuBar from './MenuBar';

const TopNav = () => {
  return (
    <div className="container-custom text-primary">
      <div className="wrapper flex w-full items-center justify-between">
        <div className="flex w-[30%] items-center gap-1 font-bold 2xl:text-2xl">
          PlusCare <BsFillHeartFill className="text-customBlue" />
        </div>
        <div className="hidden w-[40%] items-center justify-center gap-x-5 text-sm font-semibold lg:flex 2xl:gap-x-10 2xl:text-base">
          <a className="anchor" href="/">
            Home
          </a>
          <a className="anchor" href="/#services">
            Services
          </a>
          <a className="anchor" href="/#about-us">
            About Us
          </a>
          <a className="anchor" href="/#doctors">
            Doctors
          </a>
        </div>
        <div className="hidden w-[30%] items-center justify-end gap-x-5 text-sm font-semibold lg:flex 2xl:gap-x-10 2xl:text-base">
          <a href="/#FAQ">FAQ</a>
          <a
            href="/#appointment"
            className="rounded-full bg-customBlue px-4 py-3 text-customWhite"
          >
            Book Appointment
          </a>
        </div>
        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
