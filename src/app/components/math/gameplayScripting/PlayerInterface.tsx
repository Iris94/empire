'use client'

import React, { useEffect, useState } from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import PlayerCardTemplate from '../../batlegroundComp/player/playerHUD/subPlayerHUD/PlayerCardTemplate'
import '../../batlegroundComp/player/playerHUD/hud.css'
import { useGame } from '@/app/context/GameContext'
import PlayerSword from '../../svg/player/playerSword/PlayerSword'
import PlayerVoice from '../../sound/voices/PlayerVoice'
import PlayerMiscSound from '../../sound/fxsounds/PlayerMiscSound'


const PlayerInterface = () => {
  const { playerClass, playerImage } = useSelector((state: RootState) => state.player)
  const { setAttackMode, playerTurnBased, attackMode, playerPoints, setNextTurn } = useGame();

  const handleClickAttack = () => {
    if ((Math.floor(Math.random() * 10) + 1) < 5) {
      PlayerVoice(playerClass)
    }
    if ((Math.floor(Math.random() * 10) + 1) < 11) {
      PlayerMiscSound(playerClass)
    }
    if (playerPoints >= 2) {
      setAttackMode((prevAttackMode) => !prevAttackMode);
    } else {
      setNextTurn(true)
    }
  }

  return (
    <div
      id='player-sword-container'
      className={
        `player-width-css h-fit 
        flex flex-col-reverse p-2 hover:cursor-pointer`}
      onClick={playerTurnBased ? handleClickAttack : undefined}
    >
      <PlayerCardTemplate
        playerClass={playerClass}
        playerImage={playerImage}
      />

      {attackMode ?
        <PlayerSword
          attackMode={attackMode}
          playerClass={playerClass}
        /> : ''}
    </div>
  )
}

export default PlayerInterface