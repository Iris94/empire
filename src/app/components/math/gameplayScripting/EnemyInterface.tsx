'use client'

import React, { useContext, useEffect, useState } from 'react'
import '../../batlegroundComp/enemies/enemies.css'
import EnemiesTemplate from '../../batlegroundComp/enemies/EnemiesTemplate';
import { EnemyInterfaceProps } from '../../states&imports/interfaces';
import { useGame } from '@/app/context/GameContext';

const EnemyInterface: React.FC<EnemyInterfaceProps> = ({
  enemyClass,
  enemyHP,
  enemyPoints,
  enemyImage,
  enemyIndex
}) => {
  const { attackMode, setAttackMode, updateCombinedHealth, setCombinedHealth } = useGame();
  const [displayedHealth, setDisplayedHealth] = useState(enemyHP);


  useEffect(() => {
    updateCombinedHealth(displayedHealth)
  }, [])

  const interactWithEnemy = () => {
    if (attackMode) {
      setDisplayedHealth((prevHP) => prevHP - 20)
      setCombinedHealth((prevHP) => prevHP - 20)
      setAttackMode(false)
    }
  }


  return (
    <div onClick={interactWithEnemy}
      className={`flex flex-col p-2 dark-blue-card h-fit 
    enemies-width-css hover:cursor-pointer hover:scale-110
    ${attackMode ? 'player-attacks-enemies-css' : ''}`}
    >
      <EnemiesTemplate
        enemyClass={enemyClass}
        enemyHP={displayedHealth}
        enemyPoints={enemyPoints}
        enemyImage={enemyImage}
      />
    </div>
  )
}

export default EnemyInterface
