import React, { useState } from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import PlayerCardTemplate from '../../batlegroundComp/player/playerHUD/subPlayerHUD/PlayerCardTemplate'
import '../../batlegroundComp/player/playerHUD/hud.css'
import { useGame } from '@/app/context/GameContext'
import PlayerSword from '../../svg/player/playerSword/PlayerSword'

const PlayerInterface = () => {
  const { playerClass, playerImage } = useSelector((state: RootState) => state.player)
  const { setAttackMode, playerTurnBased, attackMode, playerPoints } = useGame();


  const handleClickAttack = () => {
    if (playerPoints >= 2) {
      setAttackMode((prevAttackMode) => !prevAttackMode);
    } else {
      console.log('No points')
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