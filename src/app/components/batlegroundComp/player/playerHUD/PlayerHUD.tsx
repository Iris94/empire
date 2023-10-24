'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import './hud.css'
import { GiCrossedSwords } from 'react-icons/gi'

const PlayerHUD = () => {
  const {playerClass, playerImage} = useSelector((state: RootState) => state.player)

  return (
    <div className='w-1/3 lg:w-1/6 h-fit flex flex-col-reverse p-2'>
      <div className='blue-card p-1 flex gap-1 relative items-center justify-center'>
        <h5 className='text-zinc-400 h-1/6 w-full text-xs flex justify-center items-center'>
          {playerClass}
        </h5>
        <figure className="text-red-600 text-xl font-bold absolute right-0">
          <GiCrossedSwords />
        </figure>
      </div>
      <div className='dark-blue-card w-full h-full flex justify-center items-center playerCard'>
        <Image src={playerImage} alt='player-image' className='playerCard h-full w-full p-1' />
      </div>
    </div>
  )
}

export default PlayerHUD