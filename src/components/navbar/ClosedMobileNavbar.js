import React from 'react';
import loopStudiosLogo from '../../assets/images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const ClosedMobileNavbar = ({ setIsNavbarShowing }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-8 ">
      <div className="cursor-pointer">
        <img src={loopStudiosLogo} alt="loopStudios" />
      </div>
      <div
        className="cursor-pointer text-3xl text-white"
        onClick={() => setIsNavbarShowing(true)}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default ClosedMobileNavbar;
