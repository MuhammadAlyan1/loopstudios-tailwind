import React, { useState } from 'react';
import OpenedMobileNavbar from './OpenedMobileNavbar';
import ClosedMobileNavbar from './ClosedMobileNavbar';

const MobileNavbar = () => {
  const [isNavbarShowing, setIsNavbarShowing] = useState(false);

  if (!isNavbarShowing) {
    return <ClosedMobileNavbar setIsNavbarShowing={setIsNavbarShowing} />;
  }

  return (
    <>
      <ClosedMobileNavbar setIsNavbarShowing={setIsNavbarShowing} />
      <OpenedMobileNavbar
        isNavbarShowing={isNavbarShowing}
        setIsNavbarShowing={setIsNavbarShowing}
      />
    </>
  );
};

export default MobileNavbar;
