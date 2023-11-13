import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import PlayerCardTemplate from '../../batlegroundComp/player/playerHUD/subPlayerHUD/PlayerCardTemplate'
import '../../batlegroundComp/player/playerHUD/hud.css'
import { useGame } from '@/app/context/GameContext'


const PlayerInterface = () => {
  const { playerClass, playerImage } = useSelector((state: RootState) => state.player)
  const { setAttackMode, playerTurnBased } = useGame()

  const handleClickAttack = () => {
    setAttackMode(true)
  }

  return (
    <div
      className={
        `player-width-css h-fit 
        flex flex-col-reverse p-2 hover:cursor-pointer`}
      onClick={playerTurnBased ? handleClickAttack : undefined}
    >
      <PlayerCardTemplate
        playerClass={playerClass}
        playerImage={playerImage}
      />
    </div>
  )
}

export default PlayerInterface