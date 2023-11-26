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

const EnemyInterface: React.FC<EnemyInterfaceProps> = ({
  enemyClass,
  enemyHP,
  initialHP,
  enemyAttack,
  enemyImage,
  enemyIndex
}) => {
  const { attackMode, playerHealth, generatedEnemies, playerAttack, playerTurnBased, maxPlayerHealth, setAttackMode, updateGeneratedEnemies, setNextLevel, setPlayerTurnBased, playerPoints} = useGame();
  const dispatch = useDispatch()

  const interactWithEnemy = () => {
    if (attackMode) {
      setTimeout(() => {
        const updatedEnemies = [...generatedEnemies];
        const updatedEnemy = { ...updatedEnemies[enemyIndex] };
        updatedEnemy.props = { ...updatedEnemy.props };

        updatedEnemy.props.enemyHP =
          Math.round(Math.max(
            updatedEnemy.props.enemyHP
            -
            PlayerDamage(updatedEnemy.props.enemyAttack, playerAttack)
            , 0));

        updatedEnemies[enemyIndex] = updatedEnemy;
        dispatch(setPlayerPoints(playerPoints - 2))
        updateGeneratedEnemies(updatedEnemies);
        setAttackMode(false)
      }, 2000);
    }
  }

  useEffect(() => {
    if (generatedEnemies.every(enemy => enemy.props.enemyHP === 0)) {
      dispatch(setPlayerHealth(maxPlayerHealth))
      setNextLevel(true)
    }
  }, [generatedEnemies]);

  useEffect(() => {
    const handleEnemyAttack = async () => {
      if (!playerTurnBased) {
        await EnemyAttackMovement(
          generatedEnemies,
          playerAttack,
          playerHealth,
          setPlayerHealth,
          dispatch);
        setPlayerTurnBased(true)
      }
    }

    handleEnemyAttack()
  }, [playerTurnBased])


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
      />
    </div>
  )
}

export default EnemyInterface
