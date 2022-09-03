import React from 'react';

const Creations = () => {
  return (
    <section className="mb-12 p-4 md:mx-auto md:max-w-[1600px]">
      <div className="justify-between md:my-8 md:flex md:px-[3.6rem]">
        <h2 className="mx-auto w-fit font-['Josefin_Sans'] text-3xl md:mx-0">
          OUR CREATIONS
        </h2>
        <button className="mx-auto hidden border-2 border-black py-2 px-12 tracking-[4px] transition duration-100 ease-in hover:bg-black hover:text-white md:mx-0  md:block ">
          SEE ALL
        </button>
      </div>
      <section className="md:flex md:flex-wrap md:justify-center md:gap-4">
        <div className="creation bg-deepEarthMobile md:bg-deepEarthDesktop">
          <p className="creationText">DEEP EARTH</p>
        </div>
        <div className="creation bg-nightArcadeMobile">
          <p className="creationText">NIGHT ARCADE</p>
        </div>
        <div className="creation bg-soccerTeamMobile">
          <p className="creationText">SOCCER TEAM</p>
        </div>
        <div className="creation bg-gridMobile">
          <p className="creationText">THE GRID</p>
        </div>
        <div className="creation bg-fromAboveMobile">
          <p className="creationText max-w-[160px]">FROM UP ABOVE VR</p>
        </div>
        <div className="creation bg-pocketBorealisMobile">
          <p className="creationText">POCKET BOREALIS</p>
        </div>
        <div className="creation bg-curiosityMobile">
          <p className="creationText">THE CURIOSITY</p>
        </div>
        <div className="creation bg-fishEyeMobile">
          <p className="creationText">MAKE IT FISHEYE</p>
        </div>
      </section>

      <button className="mx-auto block border-2 border-black py-2 px-12 tracking-[4px] transition duration-100 ease-in hover:bg-black hover:text-white md:hidden">
        SEE ALL
      </button>
    </section>
  );
};

export default Creations;
