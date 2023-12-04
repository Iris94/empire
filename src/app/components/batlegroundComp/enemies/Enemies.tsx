'use client'

import React, { useEffect } from 'react'
import NumberOfSpawns from '../../math/enemiesScriping/NumberOfSpawns'
import GenerateEnemies from '../../math/enemiesScriping/GenerateEnemies'
import { useGame } from '@/app/context/GameContext'
import getRandomEnemy from '../../math/enemiesScriping/GetRandomEnemy'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'

const Enemies = () => {
  const { level } = useSelector((state : RootState) => state.levelReducer)
  const { updateGeneratedEnemies, generatedEnemies, nextLevel, startGame, setStartGame } = useGame()
  const numberOfEnemySpawns = NumberOfSpawns(level);
  const randomEnemies = Array.from({ length: 2 }, (_, index) => getRandomEnemy(level));

  const enemyComponents = randomEnemies.map((enemy, index) => (
    <GenerateEnemies
      key={index}
      enemyIndex={index}
      enemyHP={enemy.enemyHP}
      initialHP={enemy.initialHP}
      enemyClass={enemy.enemyClass}
      enemyAttack={enemy.enemyAttack}
      enemyArmor={enemy.enemyArmor}
    />
  ));
  
  useEffect(() => {
    if (startGame && generatedEnemies.length === 0) {
      updateGeneratedEnemies(enemyComponents)
      setStartGame(false)
    } else if (nextLevel) {
      updateGeneratedEnemies(enemyComponents);
    }
  }, [generatedEnemies, updateGeneratedEnemies, startGame]);


  return (
    <div 
      className='w-full h-1/2 flex justify-evenly flex-wrap p-5 z-20 relative'>
      {generatedEnemies}
    </div>
  )
}

export default Enemies