'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import { useGame } from '@/app/context/GameContext'

const AttackPoints = () => {
  const {playerPoints} = useSelector((state: RootState) => state.player)
  const { initialPlayerAP } = useGame()

  const blueDotsCount = Math.min(playerPoints, initialPlayerAP);

  const attackPointsDots = Array.from({ length: initialPlayerAP }, (_, index) => (
    <div
      key={index}
      style={{
        width: '2vmin',
        height: '2vmin',
        border: 'solid 2px black',
        backgroundColor: index < blueDotsCount ? 'darkBlue' : 'red',
      }}
      className='rounded-full'
    ></div>
  ));

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


