import React from 'react';
import AboutBasicInfo from './AboutBasicInfo';
import AboutBackground from './AboutBackground';
import AboutStats from './AboutStats';
import Link from 'next/link';

const AboutCharacter = ({showAboutCharacter} : any) => {

  return (
    <div className={
      `w-1/3 lg:h-full h-screen paper-card z-10 flex-col justify-evenly lg:justify-normal p-2 lg:gap-5 gap-3
      ${showAboutCharacter === true ? 'flex' : 'hidden'}`}>
      <AboutBasicInfo />
      <AboutBackground />
      <AboutStats />
      
      <div className='w-full h-fit flex items-center justify-center blue-card p-1'>
        <Link
        href={'/battleground'}
        className='rounded-md lg:w-1/3 w-2/3 h-full flex items-center 
        justify-center dark-blue-card bg-green-950
        text-white'>Start Game</Link> 
      </div>
    </div>
  );
};

export default AboutCharacter;