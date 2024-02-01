// components/BackgroundSection.js
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const BackgroundSection = () => {
    return (
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);" }}>
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
