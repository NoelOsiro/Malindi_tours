// components/BackgroundSection.js
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const BackgroundSection = () => {
    return (
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" 
        data-testid='background-image' style={{ backgroundImage: "url(https://source.unsplash.com/random/?coralreef)" }}>
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                        <p className="text-3xl my-4">Capture your personal memory in a unique way, anywhere.</p>
                    </div>
                    <SocialMediaIcons/>
                </div>
    );
}

export default BackgroundSection;
