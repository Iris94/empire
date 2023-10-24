import React from 'react'
import HealthHUD from './playerHUD/HealthHUD'
import ManaHUD from './playerHUD/ManaHUD'
import PlayerHUD from './playerHUD/PlayerHUD'

const Player = () => {
  return (
    <div className='w-full h-1/2 z-10 flex flex-col'>
        <div className='w-full h-full z-20'>

        </div>

        <div className='w-full h-1/3 z-20 flex justify-between items-end p-2'>
              <HealthHUD />
              <PlayerHUD />
              <ManaHUD />
        </div>
    </div>
  )
}

export default Player