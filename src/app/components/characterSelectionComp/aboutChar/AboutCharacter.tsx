import React from 'react';
import AboutBasicInfo from './AboutBasicInfo';
import AboutBackground from './AboutBackground';
import AboutStats from './AboutStats';
import Link from 'next/link';

const AboutCharacter = ({showAboutCharacter} : any) => {

  return (
    <div className={
      `lg:w-1/3 h-full paper-card z-10 flex-col p-2 lg:gap-5
      ${showAboutCharacter === true ? 'flex' : 'hidden'}`}>
      <AboutBasicInfo />
      <AboutBackground />
      <AboutStats />
      
      <div className='w-full h-10 flex items-center justify-center blue-card p-1'>
        <Link
        href={'/battleground'}
        className='rounded-md w-1/3 h-2/3 flex items-center 
        justify-center dark-blue-card bg-green-950
        text-white text-sm'>Start Game</Link> 
      </div>
    </div>
  );
};

export default AboutCharacter;