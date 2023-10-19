'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import './hud.css'

const PlayerHUD = () => {
  const {playerClass, playerImage} = useSelector((state: RootState) => state.player)

  return (
    <div className='w-1/6 playerCard flex flex-col-reverse blue-card p-2'>
        <h5 className='dark-blue-card text-zinc-400 h-2/6 w-full flex justify-center items-center'>{playerClass}</h5>
        <div className='dark-blue-card w-full playerCard '>
          <Image src={playerImage} alt='player-image' className='playerCard' />
        </div>
    </div>
  )
}

export default PlayerHUD