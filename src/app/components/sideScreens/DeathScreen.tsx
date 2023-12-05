import React from 'react';
import Link from 'next/link';
import { Death } from '../states&imports/imageImport';
import Image from 'next/image';
import './sideScreens.css';

const DeathScreen = () => {
  return (
    <div className='w-screen h-screen absolute flex items-center justify-center death-section'>
      <section className='w-1/2 h-1/3 dark-blue-card rounded-md flex flex-col death-box relative'>
        <Image
          src={Death}
          alt='death'
          className='absolute w-full h-full object-cover z-30'
        />

        <div className='w-full h-1/2 flex items-center justify-center z-40'>
          <h2 className='text-red-950 death-text'>You Died</h2>
        </div>
        <div className='w-full h-fit flex items-center justify-center'>
          <Link
            href='/'
            className='w-fit h-fit p-2 z-40 text-red-800 dark-blue-card'>
            Back to Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DeathScreen;
