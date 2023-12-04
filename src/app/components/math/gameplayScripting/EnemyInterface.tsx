'use client'

import React, { useEffect, useState } from 'react'
import '../../batlegroundComp/enemies/enemies.css'
import EnemiesTemplate from '../../batlegroundComp/enemies/EnemiesTemplate';
import { EnemyInterfaceProps } from '../../states&imports/interfaces';
import { useGame } from '@/app/context/GameContext';
import PlayerDamage from '../playerScripting/PlayerDamage';
import { useDispatch } from 'react-redux';
import { setPlayerHealth, setPlayerPoints } from '@/app/GlobalRedux/Features/player/playerSlice';
import { EnemyAttackMovement } from '../enemiesScriping/EnemyAttackMovement';
import EnemySword from '../../svg/enemy/enemySword/EnemySword';
import PlayerDamageStatus from '../../sideScreens/PlayerDamageStatus';
import EnemyDamageStatus from '../../sideScreens/EnemyDamageStatus';
import EnemyInteraction from '../playerScripting/EnemyInteraction';

const EnemyInterface: React.FC<EnemyInterfaceProps> = ({
  enemyClass,
  enemyHP,
  initialHP,
  enemyAttack,
  enemyImage,
  enemyIndex,
  enemyArmor
}) => {

  const { attackMode, playerHealth, generatedEnemies, playerAttack, playerTurnBased, maxPlayerHealth, setAttackMode, updateGeneratedEnemies, setNextLevel, setPlayerTurnBased, playerPoints, playerArmor, setPlayerScreenDmg, playerScreenDmg, setEnemyScreenDmg, enemyScreenDmg, setLevelDelay} = useGame();

  const dispatch = useDispatch()
  const [showPlayerDamage, setShowPlayerDamage] = useState(false);

  const interactWithEnemy = () => {
    EnemyInteraction(
      attackMode,
      generatedEnemies,
      enemyIndex,
      playerAttack,
      setPlayerScreenDmg,
      setShowPlayerDamage,
      updateGeneratedEnemies,
      setLevelDelay,
      dispatch,
      setPlayerHealth,
      maxPlayerHealth,
      setNextLevel,
      setAttackMode,
      setPlayerPoints,
      playerPoints
    )
  };

  useEffect(() => {
    const handleEnemyAttack = async () => {
      if (!playerTurnBased) {
        await EnemyAttackMovement(
          generatedEnemies,
          playerArmor,
          playerHealth,
          setPlayerHealth,
          setEnemyScreenDmg,
          dispatch);
        setPlayerTurnBased(true)
        setEnemyScreenDmg('')
      }
    }
    handleEnemyAttack()
  }, [playerTurnBased])

  useEffect(() => {
    setTimeout(() => {
      setShowPlayerDamage(false)
    }, 3500);
  }, [showPlayerDamage])

  return (
    <div onClick={interactWithEnemy}
      className={`flex flex-col p-2 dark-blue-card h-fit 
    enemies-width-css hover:cursor-pointer enemy-click-class
    ${attackMode ? 'player-attacks-enemies-css' : ''}`}
    >
      <EnemiesTemplate
        enemyClass={enemyClass}
        enemyHP={enemyHP}
        initialHP={initialHP}
        enemyAttack={enemyAttack}
        enemyImage={enemyImage}
        enemyArmor={enemyArmor}
      />

      {showPlayerDamage && <PlayerDamageStatus playerScreenDmg={playerScreenDmg} />}
      {<EnemyDamageStatus enemyScreenDmg={enemyScreenDmg} />}

      {!playerTurnBased  && 
        <EnemySword 
          playerTurnBased={playerTurnBased}
          enemyIndex={enemyIndex}
        />
      }
    </div>
  )
}

export default EnemyInterface
