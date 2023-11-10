'use client'

import React, {useState, useEffect} from 'react'
import '../../batlegroundComp/enemies/enemies.css'
import EnemiesTemplate from '../../batlegroundComp/enemies/EnemiesTemplate';
import { EnemyInterfaceProps } from '../../states&imports/interfaces';
import { useGame } from '@/app/context/GameContext';
import PlayerDamage from '../playerScripting/PlayerDamage';
import DiceRoll from './DiceRoll';

const EnemyInterface: React.FC<EnemyInterfaceProps> = ({
  enemyClass,
  enemyHP,
  enemyAttack,
  enemyImage,
  enemyIndex
}) => {
  const { attackMode, setAttackMode, generatedEnemies, updateGeneratedEnemies, setNextLevel, playerAttack, playerPoints, nextLevel, setRollWhoStartFirst} = useGame();

  const interactWithEnemy = () => {
    if (attackMode) {
    const updatedEnemies = [...generatedEnemies];
    const updatedEnemy = { ...updatedEnemies[enemyIndex] };
    updatedEnemy.props = { ...updatedEnemy.props };

    updatedEnemy.props.enemyHP = 
      Math.max(
        updatedEnemy.props.enemyHP 
        -
        PlayerDamage(updatedEnemy.props.enemyAttack, playerAttack)
        , 0);

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

  useEffect(() => {
    const diceResults = DiceRoll(playerPoints, playerAttack, generatedEnemies)
    if (diceResults == 'player') {
      setRollWhoStartFirst('player')
    } else {
      setRollWhoStartFirst('enemy')
    }
  }, [nextLevel])

  return (
    <div onClick={interactWithEnemy}
      className={`flex flex-col p-2 dark-blue-card h-fit 
    enemies-width-css hover:cursor-pointer hover:scale-110
    ${attackMode ? 'player-attacks-enemies-css' : ''}`}
    >
      <EnemiesTemplate
        enemyClass={enemyClass}
        enemyHP={enemyHP}
        enemyAttack={enemyAttack}
        enemyImage={enemyImage}
      />
    </div>
  )
}

export default EnemyInterface
