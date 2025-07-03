import Link from 'next/link';
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        action=""
        method="POST"
        className="flex-1 text-slate-900 dark:text-slate-200"
      >
        <div className="flex  h-full items-center space-x-1 rounded-xl bg-slate-50 px-4 py-2">
          {renderMagnifyingGlassIcon()}
          <input
            type="search"
            placeholder="Type and press enter"
            className="w-full border-none bg-transparent text-sm focus:outline-none focus:ring-0 "
          />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const list = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/#services',
    },
    {
      title: 'Doctors',
      href: '/#doctors',
    },
    {
      title: 'About Us',
      href: '/#about-us',
    },
    {
      title: 'FAQ',
      href: '/#FAQ',
    },
  ];

  return (
    <div className="h-screen w-full divide-y-2 divide-neutral-100 overflow-y-auto bg-themeSurface py-2 shadow-lg ring-1  transition">
      <div className="px-5 py-2">
        <div className="flex w-[30%] items-center gap-1 font-bold text-themeTextPrimary 2xl:text-2xl">
          PlusCare <BsFillHeartFill className="text-themeSecondary" />
        </div>
        <button
          type="button"
          className="absolute right-2 top-2 p-1 text-themeTextPrimary"
          onKeyDownCapture={onClickClose}
          onClick={onClickClose}
        >
          <MdClose />
        </button>
        <div className="mt-5">{renderSearchForm()}</div>
      </div>
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {list.map((item) => (
          <Link
            onClick={onClickClose}
            href={item.href}
            key={item.title}
            className="capitalize text-themeTextPrimary"
          >
            {item.title}
          </Link>
        ))}
      </ul>
      <div className="px-5 py-6">
        <Link
          onClick={onClickClose}
          href="/#appointment"
          className="rounded-full bg-themeSecondary px-4 py-3 text-themeSurface"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default NavMobile;
