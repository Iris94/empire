'use client'

import React from 'react'
import HealthBar from './playerHUD/HealthBar'
import ManaBar from './playerHUD/ManaBar'
import PlayerInterface from '../../math/gameplayScripting/PlayerInterface'
import SpecialBar from './playerHUD/SpecialBar'
import GameplayBar from './playerHUD/GameplayBar'
import { useGame } from '@/app/context/GameContext'
import EndTurnScreen from '../../math/playerScripting/EndTurnScreen'
import TurnScreen from '../../math/playerScripting/TurnScreen'

const Player = () => {
  const { playerHealth, playerMana, playerTurnBased, setPlayerTurnBased, maxPlayerHealth } = useGame()

  return (
    <div className='w-full h-1/2 z-10 flex flex-col overflow-hidden'>
      <div className='w-full h-full z-20'>

      </div>

      <div className='w-full h-1/3 font-bold z-20 flex gap-2 justify-between items-end p-2 paper-card'>
        <HealthBar playerHealth={playerHealth} maxPlayerHealth={maxPlayerHealth} />
        <SpecialBar />
        <PlayerInterface />
        <GameplayBar />
        <ManaBar playerMana={playerMana} />
      </div>

      <TurnScreen 
        playerTurnBased={playerTurnBased} />

      <EndTurnScreen 
      playerTurnBased={playerTurnBased}
      setPlayerTurnBased={setPlayerTurnBased} />
    </div>
  )
}

export default Player