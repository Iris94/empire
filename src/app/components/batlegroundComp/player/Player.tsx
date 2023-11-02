'use client'

import React from 'react'
import HealthHUD from './playerHUD/HealthBar'
import ManaHUD from './playerHUD/ManaBar'
import PlayerHUD from '../../math/gameplayScripting/PlayerInterface'
import SpecialHUD from './playerHUD/SpecialBar'
import GameplayHUD from './playerHUD/GameplayBar'
import AutoStatsIncrement from '../../math/playerScripting/AutoStatsIncrement'

const Player = () => {
  const { playerHealth, playerMana } = AutoStatsIncrement()

  return (
    <div className='w-full h-1/2 z-10 flex flex-col'>
      <div className='w-full h-full z-20'>

      </div>

      <div className='w-full h-1/3 font-bold z-20 flex gap-2 justify-between items-end p-2 paper-card'>
        <HealthHUD playerHealth={playerHealth} />
        <SpecialHUD />
        <PlayerHUD />
        <GameplayHUD />
        <ManaHUD playerMana={playerMana} />
      </div>
    </div>
  )
}

export default Player