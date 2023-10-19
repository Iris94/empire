import React from 'react'
import HealthHUD from './playerHUD/HealthHUD'
import ManaHUD from './playerHUD/ManaHUD'
import PlayerHUD from './playerHUD/PlayerHUD'


const Player = () => {
  return (
    <div className='w-full h-1/2 z-10 flex items-end'>
        <div className='w-full h-1/3 dark-blue-card z-20 flex justify-between items-end'>
            <HealthHUD />
            <PlayerHUD />
            <ManaHUD />
        </div>
    </div>
  )
}

export default Player