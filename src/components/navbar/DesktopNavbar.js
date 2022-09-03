import React from 'react';
import loopStudiosLogo from '../../assets/images/logo.svg';

const DesktopNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-8">
      <div className="cursor-pointer">
        <img src={loopStudiosLogo} alt="loopstudios" />
      </div>
      <div className="flex min-w-[350px] justify-between">
        <p className="link">About</p>
        <p className="link">Careers</p>
        <p className="link">Events</p>
        <p className="link">Products</p>
        <p className="link">Support</p>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
