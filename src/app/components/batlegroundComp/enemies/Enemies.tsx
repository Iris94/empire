import React from 'react'
import GenerateEnemies from './scriptForEnemies/GenerateEnemies'

const Enemies = () => {
  return (
    <div className='w-full h-1/2 z-10 flex justify-evenly flex-wrap p-5'>
      <GenerateEnemies />
      <GenerateEnemies />
      <GenerateEnemies />
      <GenerateEnemies />
      <GenerateEnemies />
    </div>
  )
}

export default Enemies