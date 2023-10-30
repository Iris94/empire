import React from 'react'
import HealthHUD from './playerHUD/HealthHUD'
import ManaHUD from './playerHUD/ManaHUD'
import PlayerHUD from './playerHUD/PlayerHUD'
import SpecialHUD from './playerHUD/SpecialHUD'
import GameplayHUD from './playerHUD/GameplayHUD'

const Player = () => {
  return (
    <div className='w-full h-1/2 z-10 flex flex-col'>
        <div className='w-full h-full z-20'>

        </div>

        <div className='w-full h-1/3 font-bold z-20 flex gap-2 justify-between items-end p-2 paper-card'>
              <HealthHUD />
              <SpecialHUD />
              <PlayerHUD />
              <GameplayHUD />
              <ManaHUD />
        </div>
    </div>
  )
}

export default Player