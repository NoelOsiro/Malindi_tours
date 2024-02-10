import React from 'react';

// Define prop types
interface HeroProps {
  title: string;
  subTitle: string;
  buttonText: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subTitle, buttonText, imageUrl }) => {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">What business are you?</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            {title}
          </h1>
          <p className="leading-normal text-2xl mb-8">
            {subTitle}
          </p>
          <button 
            className="mx-auto  hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {buttonText}
          </button>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src={imageUrl} alt="Hero"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;