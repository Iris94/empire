'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'

const AttackPoints = () => {
  const {playerPoints} = useSelector((state: RootState) => state.player)

  const attackPointsDots = Array.from({length: playerPoints}, (_, index) => (
    <div
    key={index}
    style={{ width: '2vmin', height: '2vmin', border: 'solid 2px black' }}
    className='rounded-full bg-blue-600'
  >
  </div>
  ))

  return (
    <div className='flex flex-col'>
        <div className='h-1/2 p-1 flex items-center justify-center'>
            <p>Attack Points</p>
        </div>
        <div className='h-1/2 flex gap-1 items-center justify-center'>
            {attackPointsDots}
        </div>
    </div>
  )
}

export default AttackPoints


