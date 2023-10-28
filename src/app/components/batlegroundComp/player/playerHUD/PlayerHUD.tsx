'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import './hud.css'

const PlayerHUD = () => {
  const {playerClass, playerImage} = useSelector((state: RootState) => state.player)

  return (
    <div className='player-width-css h-fit flex flex-col-reverse p-2'>
      <div className='blue-card p-1 flex gap-1 relative items-center justify-center'>
        <h5 className='text-zinc-400 h-1/6 w-full flex justify-center items-center'>
          {playerClass}
        </h5>
      </div>
      <div className='dark-blue-card w-full h-full flex justify-center items-center playerCard'>
        <Image src={playerImage} alt='player-image' className='playerCard h-full w-full p-1' />
      </div>
    </div>
  )
}

export default PlayerHUD