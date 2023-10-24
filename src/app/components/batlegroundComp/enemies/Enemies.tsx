import React from 'react'
import EnemyTemplate from './EnemyTemplate'

const Enemies = () => {
  return (
    <div className='w-full h-1/2 z-10 flex justify-evenly flex-wrap p-5'>
        <EnemyTemplate />
        <EnemyTemplate />
        <EnemyTemplate />
        <EnemyTemplate />
        <EnemyTemplate />
        <EnemyTemplate />
        <EnemyTemplate />

    </div>
  )
}

export default Enemies