'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import PlayerCardTemplate from '../../batlegroundComp/player/playerHUD/subPlayerHUD/PlayerCardTemplate'
import '../../batlegroundComp/player/playerHUD/hud.css'


const PlayerInterface = ({onPlayerAttack} : any) => {
  const { playerClass, playerImage } = useSelector((state: RootState) => state.player)

  return (
    <div 
    className='player-width-css h-fit flex flex-col-reverse p-2'
    onClick={onPlayerAttack}
    >
      <PlayerCardTemplate
        playerClass={playerClass}
        playerImage={playerImage}
      />
    </div>
  )
}

export default PlayerInterface