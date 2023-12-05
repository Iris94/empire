

import React from 'react'
import PlayerDamage from './PlayerDamage';

const EnemyInteraction = (
     generatedEnemies: any,
     enemyIndex: number,
     playerAttack: number,
     setPlayerScreenDmg: any,
     setShowPlayerDamage: any,
     updateGeneratedEnemies: any,
     setLevelDelay: any,
     dispatch: any,
     setPlayerHealth: any,
     maxPlayerHealth: number,
     setNextLevel: any,
     setAttackMode: any,
     setPlayerPoints: any,
     playerPoints: number
) => {

        const updatedEnemies = [...generatedEnemies];
        const updatedEnemy = { ...updatedEnemies[enemyIndex] };
        updatedEnemy.props = { ...updatedEnemy.props };
  
        const damageToEnemy = Math.round(Math.max(
          updatedEnemy.props.enemyHP -
          PlayerDamage(updatedEnemy.props.enemyArmor, playerAttack, setPlayerScreenDmg)
          , 0));
        
        setShowPlayerDamage(true)
        setTimeout(() => {
          updatedEnemy.props.enemyHP = damageToEnemy;
          updatedEnemies[enemyIndex] = updatedEnemy;
          
          if (updatedEnemy.props.enemyHP === 0) {
            updatedEnemies.splice(enemyIndex, 1);
            const newLivingEnemies = updatedEnemies.map((enemy, index) => {
              const updatedEnemy = { ...enemy };
              updatedEnemy.props = { ...updatedEnemy.props };
              updatedEnemy.props.enemyIndex = index;
              return updatedEnemy;
            });
  
            updateGeneratedEnemies(newLivingEnemies);
            if (newLivingEnemies.length === 0) {
              setLevelDelay(true)
              const completedLevel = setTimeout(() => {
                dispatch(setPlayerHealth(maxPlayerHealth))
                setAttackMode(false);
                setNextLevel(true)
              }, 3000);
              return () => clearTimeout(completedLevel)
            }
          } else {
            updateGeneratedEnemies(updatedEnemies)
          }
          dispatch(setPlayerPoints(playerPoints - 2));
          setAttackMode(false);
        }, 2000);
      
}

export default EnemyInteraction