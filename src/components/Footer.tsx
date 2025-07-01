import {
  BsFacebook,
  BsFillHeartFill,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';
import { MdCopyright } from 'react-icons/md';

import ContactInfo from './ContactInfo';
import Legal from './Legal';
import QuickMenu from './QuickMenu';
import ServiceTime from './ServiceTime';

function FooterComp() {
  return (
    <div className="container-custom pt-10 text-sm text-whiteOne md:pt-20 md:text-base">
      <div className="flex flex-col items-start justify-between gap-5 lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-[35%]">
          <div className="flex w-[30%] items-center gap-1 font-bold 2xl:text-2xl">
            PlusCare <BsFillHeartFill className="" />
          </div>
          <div className="w-[85%]">
            Making Healthcare more Accessible and Convenient for you
          </div>
          <div className="flex items-center gap-3 text-sm">
            <BsFacebook />
            <BsYoutube />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
          <QuickMenu />
          <ContactInfo />
          <ServiceTime />
          <Legal />
        </div>
      </div>
      <hr className="mb-5 mt-10 h-px border-0 bg-whiteTwo/50 md:mt-20" />
      <div className="flex items-center justify-center pb-5 text-xs md:text-sm lg:text-base">
        Copyright{' '}
        <span>
          <MdCopyright />
        </span>{' '}
        2023. All rights reserved by DevsphereLabs.
      </div>
    </div>
  );
}

export default FooterComp;
