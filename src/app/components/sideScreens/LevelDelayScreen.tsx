import React from 'react';
import { Victory } from '../states&imports/imageImport';
import Image from 'next/image';
import './sideScreens.css';

const LevelDelayScreen = () => {
  return (
    <div className='w-screen h-screen absolute z-50 flex items-center justify-center'>
      <div className='w-1/2 h-1/3 paper-card flex flex-col relative'>
        <Image
          src={Victory}
          alt='victory'
          className='absolute w-full h-full object-cover z-30'
        />

        <div className='w-full h-full z-40 flex justify-center items-center'>
          <div className='w-fit h-fit p-1 dark-blue-card text-center text-emerald-800 shield-text'>
              Next Level
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelDelayScreen;
