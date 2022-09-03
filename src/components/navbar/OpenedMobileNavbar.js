import React from 'react';
import loopStudiosLogo from '../../assets/images/logo.svg';
import { AiOutlineClose } from 'react-icons/ai';

const OpenedMobileNavbar = ({ isNavbarShowing, setIsNavbarShowing }) => {
  return (
    <nav
      className={
        'absolute top-0 bottom-0 left-0 w-[320px] bg-black transition duration-150 ease-in ' +
          isNavbarShowing ?? ' -translate-x-full transform '
      }
    >
      <section className="flex items-center justify-between px-8 py-8">
        <div className="w-full cursor-pointer">
          <img src={loopStudiosLogo} alt="loopStudios" />
        </div>
        <div
          className="cursor-pointer text-4xl text-white"
          onClick={() => setIsNavbarShowing(false)}
        >
          <AiOutlineClose />
        </div>
      </section>
      <section className="mt-12 px-8">
        <p className="link mb-4 text-3xl">ABOUT</p>
        <p className="link mb-4 text-3xl">CAREERS</p>
        <p className="link mb-4 text-3xl">EVENTS</p>
        <p className="link mb-4 text-3xl">PRODUCTS</p>
        <p className="link mb-4 text-3xl">SUPPORT</p>
      </section>
    </nav>
  );
};

export default OpenedMobileNavbar;
