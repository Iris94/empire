'use client'

import React, {useState, useEffect} from 'react'
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
  const { attackMode, setAttackMode, generatedEnemies, updateGeneratedEnemies, setNextLevel, nextLevel} = useGame();

  const interactWithEnemy = () => {
    if (attackMode) {
    const updatedEnemies = [...generatedEnemies];
    const updatedEnemy = { ...updatedEnemies[enemyIndex] };
    updatedEnemy.props = { ...updatedEnemy.props };
    updatedEnemy.props.enemyHP = Math.max(updatedEnemy.props.enemyHP - 100, 0);
    updatedEnemies[enemyIndex] = updatedEnemy;
    updateGeneratedEnemies(updatedEnemies);
    setAttackMode(false);
    }
  }
  
  useEffect(() => {
    if (generatedEnemies.every(enemy => enemy.props.enemyHP === 0)) {
      setNextLevel(true)
    }
  }, [generatedEnemies]);

  return (
    <div onClick={interactWithEnemy}
      className={`flex flex-col p-2 dark-blue-card h-fit 
    enemies-width-css hover:cursor-pointer hover:scale-110
    ${attackMode ? 'player-attacks-enemies-css' : ''}`}
    >
      <EnemiesTemplate
        enemyClass={enemyClass}
        enemyHP={enemyHP}
        enemyPoints={enemyPoints}
        enemyImage={enemyImage}
      />
    </div>
  )
}

export default EnemyInterface
