/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        desktopHeroImage: "url('/src/assets/images/desktop/image-hero.jpg')",

        deepEarthMobile:
          "url('/src/assets/images/mobile/image-deep-earth.jpg')",
        nightArcadeMobile:
          "url('/src/assets/images/mobile/image-night-arcade.jpg')",
        soccerTeamMobile:
          "url('/src/assets/images/mobile/image-soccer-team.jpg')",
        gridMobile: "url('/src/assets/images/mobile/image-grid.jpg')",
        fromAboveMobile:
          "url('/src/assets/images/mobile/image-from-above.jpg')",
        pocketBorealisMobile:
          "url('/src/assets/images/mobile/image-pocket-borealis.jpg')",
        curiosityMobile: "url('/src/assets/images/mobile/image-curiosity.jpg')",
        fishEyeMobile: "url('/src/assets/images/mobile/image-fisheye.jpg')",

        deepEarthDesktop:
          "url('/src/assets/images/desktop/image-deep-earth.jpg')",
        nightArcadeDesktop:
          "url('/src/assets/images/desktop/image-night-arcade.jpg')",
        soccerTeamDesktop:
          "url('/src/assets/images/desktop/image-soccer-team.jpg')",
        gridDesktop: "url('/src/assets/images/desktop/image-grid.jpg')",
        fromAboveDesktop:
          "url('/src/assets/images/desktop/image-from-above.jpg')",
        pocketBorealisDesktop:
          "url('/src/assets/images/desktop/image-pocket-borealis.jpg')",
        curiosityDesktop:
          "url('/src/assets/images/desktop/image-curiosity.jpg')",
        fishEyeDesktop: "url('/src/assets/images/desktop/image-fisheye.jpg')",
      },
    },
  },
  plugins: [],
};
