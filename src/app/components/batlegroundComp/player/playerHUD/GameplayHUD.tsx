import React from 'react'
import AttackPoints from './subPlayerHUD/AttackPoints'
import LevelPoints from './subPlayerHUD/LevelPoints'

const gameplayHUD = () => {
  return (
    <div className='w-full h-full flex items-center justify-evenly'>
        <AttackPoints />
        <LevelPoints />
    </div>
  )
}

export default gameplayHUD