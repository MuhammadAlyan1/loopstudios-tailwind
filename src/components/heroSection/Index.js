import React from 'react';
import Navbar from '../navbar/Index';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-slate-500 bg-desktopHeroImage bg-cover bg-no-repeat bg-blend-multiply">
      <Navbar />
      <div className=" mt-32 p-4 md:mt-44">
        <h1 className="mx-auto max-w-[300px] border-4 p-6 font-['Josefin_Sans'] text-4xl text-white md:mx-0 md:ml-12 md:max-w-[820px] md:text-8xl">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
