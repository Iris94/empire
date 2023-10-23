'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'

const AttackPoints = () => {
    const {playerPoints} = useSelector((state: RootState) => state.player)

  return (
    <div className='flex flex-col gap-1'>
        <div className='h-1/2 blue-card text-zinc-300 p-1'>
            <p>Attack Points</p>
        </div>
        <div className='h-1/2 blue-card text-white'>
            <p>{playerPoints}</p>
        </div>
    </div>
  )
}

export default AttackPoints