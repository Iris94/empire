'use client'

import React from 'react'
import numberOfSpawns from '../../math/scriptForEnemies/numberOfSpawns'
import GenerateEnemies from '../../math/scriptForEnemies/GenerateEnemies'

const Enemies = () => {
  const spawnNumber = numberOfSpawns()
  const generatedEnemies = Array.from({ length: 5 }, (_, index) => (
    <GenerateEnemies key={index} enemyIndex={index} />
  ))
  

  return (
    <div className='w-full h-1/2 z-10 flex justify-evenly flex-wrap p-5'>
      {generatedEnemies}
    </div>
  )
}

export default Enemies