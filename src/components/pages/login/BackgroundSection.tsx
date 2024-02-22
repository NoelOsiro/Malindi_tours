// components/BackgroundSection.js
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const BackgroundSection = () => {
  return (
    // Background section with dynamic background image
    <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" 
        data-testid='background-image' style={{ backgroundImage: "url(https://source.unsplash.com/random/?malindi-culture)" }}>
      {/* Overlay for background image */}
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      {/* Content container */}
      <div className="w-full px-24 z-10">
        {/* Main heading */}
        <h1 className="text-5xl font-bold text-left tracking-wide">Embrace Malindi's Cultural Heritage</h1>
        {/* Description */}
        <p className="text-3xl my-4">Explore, preserve, and celebrate the unique traditions of Malindi, capturing the essence of its rich cultural tapestry.</p>
      </div>
      {/* Social media icons component */}
      <SocialMediaIcons/>
    </div>
  );
}

export default BackgroundSection;
