import React from 'react';
import interactiveVRImage from '../assets/images/desktop/image-interactive.jpg';

const InteractiveVR = () => {
  return (
    <section className="mx-auto p-4 lg:relative lg:left-[150px] lg:mx-auto lg:my-12 lg:flex lg:max-w-[1200px] lg:overflow-x-hidden lg:overflow-y-hidden">
      <div className="mx-auto block w-fit basis-1/2">
        <img src={interactiveVRImage} alt="interactive VR" />
      </div>
      <div className="mx-auto my-12 max-w-[220px] bg-white md:max-w-[320px] lg:relative lg:-left-[120px] lg:top-[120px] lg:m-0 lg:max-w-[470px] lg:basis-1/2 lg:p-8 ">
        <h2 className="my-4 text-center font-['Josefin_Sans'] text-2xl font-bold md:text-4xl  lg:text-left lg:text-5xl">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="text-center text-slate-700 lg:text-left">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default InteractiveVR;
