import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';

const AboutStats = () => {
    const { playerClass } = useSelector(
        (state: RootState) => state.player
      );

    return (
        <div className='w-full h-1/6 flex flex-col blue-card p-1 hover:scale-110'>
            <div className='text-white w-full h-full lg:overflow-hidden overflow-scroll flex  dark-blue-card'>
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
        </div>
      )
}

export default AboutStats