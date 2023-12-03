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

const EnemyInterface: React.FC<EnemyInterfaceProps> = ({
  enemyClass,
  enemyHP,
  initialHP,
  enemyAttack,
  enemyImage,
  enemyIndex,
  enemyArmor
}) => {
  const { attackMode, playerHealth, generatedEnemies, playerAttack, playerTurnBased, maxPlayerHealth, setAttackMode, updateGeneratedEnemies, setNextLevel, setPlayerTurnBased, playerPoints, playerArmor} = useGame();
  const dispatch = useDispatch()

  const interactWithEnemy = () => {
    if (attackMode) {
      setTimeout(() => {
        const updatedEnemies = [...generatedEnemies];
        const updatedEnemy = { ...updatedEnemies[enemyIndex] };
        updatedEnemy.props = { ...updatedEnemy.props };
  
        updatedEnemy.props.enemyHP =
          Math.round(Math.max(
            updatedEnemy.props.enemyHP -
            PlayerDamage(updatedEnemy.props.enemyArmor, playerAttack)
            , 0));
  
        updatedEnemies[enemyIndex] = updatedEnemy;
        updatedEnemies.splice(enemyIndex, 1);
        const newLivingEnemies = updatedEnemies.map((enemy, index) => {
          const updatedEnemy = { ...enemy };
          updatedEnemy.props = { ...updatedEnemy.props };
          updatedEnemy.props.enemyIndex = index;
          return updatedEnemy;
        });
  
        dispatch(setPlayerPoints(playerPoints - 2));
        updateGeneratedEnemies(newLivingEnemies);

        if (newLivingEnemies.length === 0) {
          dispatch(setPlayerHealth(maxPlayerHealth))
          setNextLevel(true)
        }
        setAttackMode(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const handleEnemyAttack = async () => {
      if (!playerTurnBased) {
        await EnemyAttackMovement(
          generatedEnemies,
          playerArmor,
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
        enemyArmor={enemyArmor}
      />

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
