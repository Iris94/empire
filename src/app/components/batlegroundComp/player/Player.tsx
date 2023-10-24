import React from 'react'
import HealthHUD from './playerHUD/HealthHUD'
import ManaHUD from './playerHUD/ManaHUD'
import PlayerHUD from './playerHUD/PlayerHUD'

const Player = () => {
  return (
    <div className='w-full h-1/2 z-10 flex flex-col'>
        <div className='w-full h-full z-20'>

        </div>
        <div className='w-full lg:h-1/3 h-1/5 fractal z-20 flex justify-center items-center p-2'>
          <div className='w-2/6 h-full fractal'></div>
          <div className='w-2/6 flex items-end justify-center h-full fractal'>
            <div className='lg:w-2/3 w-full flex z-30 justify-between items-end playerHud blue-card'>
              <HealthHUD />
              <PlayerHUD />
              <ManaHUD />
            </div>
          </div>
          <div className='w-2/6 h-full fractal'></div>
        </div>
    </div>
  )
}

export default Player