'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

import NavMobile from './NavMobile';

export interface MenuBarProps {}
const MenuBar: React.FC<MenuBarProps> = () => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="fixed inset-0 outline-none focus:outline-none">
            <Transition.Child
              as={Fragment}
              enter="transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              enterFrom="[clip-path:inset(0_0_100%_0)]"
              enterTo="[clip-path:inset(0_0_0%_0)]"
              leave="transition-[clip-path] duration-300 ease-in"
              leaveFrom="[clip-path:inset(0_0_0%_0)]"
              leaveTo="[clip-path:inset(0_0_100%_0)]"
            >
              <div className="relative z-20">
                <NavMobile onClickClose={handleCloseMenu} />
              </div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenMenu}
        className="flex items-center justify-center rounded-lg p-2.5 focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {renderContent()}
    </>
  );
};

export default MenuBar;
