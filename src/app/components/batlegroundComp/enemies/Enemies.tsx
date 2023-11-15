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
  const { updateGeneratedEnemies, setEnemyParentId, generatedEnemies, nextLevel } = useGame()
  const numberOfEnemySpawns = NumberOfSpawns(level);
  const randomEnemies = Array.from({ length: numberOfEnemySpawns }, (_, index) => getRandomEnemy(level));

  const enemyComponents = randomEnemies.map((enemy, index) => (
    <GenerateEnemies
      key={index}
      enemyIndex={index}
      enemyHP={enemy.enemyHP}
      initialHP={enemy.initialHP}
      enemyClass={enemy.enemyClass}
      enemyAttack={enemy.enemyAttack}
    />
  ));
  
  useEffect(() => {
    if (generatedEnemies.length === 0 || nextLevel) {
      updateGeneratedEnemies(enemyComponents);
      setEnemyParentId('enemy-parent')
    }
  }, [generatedEnemies, updateGeneratedEnemies]);


  return (
    <div 
      id='enemy-parent'
      className='w-full h-1/2 flex justify-evenly flex-wrap p-5 z-50'>
      {generatedEnemies}
    </div>
  )
}

export default Enemies