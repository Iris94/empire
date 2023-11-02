'use client'

import React from 'react'
import GenerateEnemies from './scriptForEnemies/GenerateEnemies'
import numberOfSpawns from './scriptForEnemies/numberOfSpawns'

const Enemies = () => {
  const spawnNumber = numberOfSpawns()
  const generatedEnemies = Array.from({length : spawnNumber}, (_, index) => (
    <GenerateEnemies key={index}/>
  ))

  return (
    <div className='w-full h-1/2 z-10 flex justify-evenly flex-wrap p-5'>
      {generatedEnemies}
    </div>
  )
}

export default Enemies