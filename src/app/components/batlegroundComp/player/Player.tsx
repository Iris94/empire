import React from 'react'
import HealthHUD from './playerHUD/HealthHUD'
import ManaHUD from './playerHUD/ManaHUD'
import PlayerHUD from './playerHUD/PlayerHUD'

const Player = () => {
  return (
    <div className='w-full h-1/2 z-10 flex flex-col'>
        <div className='w-full h-full z-20'>

        </div>

        <div className='w-full lg:h-1/3 fractal paper-card 
        z-20 flex justify-center items-end p-2'>
            <div className='w-fit h-fit flex z-30 justify-between items-end playerHud dark-blue-card'>
              <HealthHUD />
              <PlayerHUD />
              <ManaHUD />
            </div>
        </div>
    </div>
  )
}

export default Player