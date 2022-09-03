import React from 'react';
import loopStudiosLogo from '../assets/images/logo.svg';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import { RiPinterestFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-black p-8 text-white md:flex md:justify-around">
      <section className="md:pr-[250px]">
        <div className="mx-auto my-4 mb-8 w-fit cursor-pointer md:mx-0">
          <img src={loopStudiosLogo} alt="loopstudios" />
        </div>
        <div className="mx-auto w-fit md:mx-0 md:flex md:gap-4">
          <p className="link mb-4 ">About</p>
          <p className="link mb-4">Careers</p>
          <p className="link mb-4">Events</p>
          <p className="link mb-4">Products</p>
          <p className="link mb-4">Support</p>
        </div>
      </section>
      <section className="md:pl-[250px]">
        <div className="my-6 flex justify-center gap-4 text-3xl text-white md:justify-end">
          <div className="link">
            <FaFacebookSquare />
          </div>

          <div className="link">
            <FaTwitter />
          </div>
          <div className="link">
            <RiPinterestFill />
          </div>
          <div className="link">
            <FaInstagram />
          </div>
        </div>
        <p className="mx-auto w-fit md:mx-0">
          &#169; 2022 LoopStudios. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
