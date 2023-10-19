import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';

const AboutStats = () => {
    const { playerClass } = useSelector(
        (state: RootState) => state.player
      );

    return (
        <div className='w-full h-2/6 flex flex-col blue-card'>
            <div className='text-white w-full p-2 mt-2 h-1/2 text-xs flex justify-center items-center'>
               {playerClass === 'Knight' ? <p>
               Knights are experts in survivability and absorbing blows. Gameplay revolves around pushing through, blocking damage, and countering
               </p>
               : ''} 

                {playerClass === 'Mage' ? <p>
                Mages are glass cannons, but they can control the battlefield like no other class. Gameplay revolves around control, damage over time, and eliminating opponents before they reach you.
                </p>
                : ''} 

                {playerClass === 'Assassin' ? <p>
                Assassins can hold their own and deliver an extreme amount of damage. Gameplay revolves around stealth, traps, and critical hits.  
                </p>
                : ''} 
            </div>
            <div className='w-full p-1 h-1/2'>
                
            </div>
        </div>
      )
}

export default AboutStats