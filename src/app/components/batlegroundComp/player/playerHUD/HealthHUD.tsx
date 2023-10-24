'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import './hud.css';

const HealthHUD = () => {
  const {playerHP} = useSelector((state: RootState) => state.player)

  return (
    <div className='w-1/6 h-fit diabloHeart items-center flex flex-col'>
        <div className='w-full h-full diabloHeart flex items-center justify-center text-white text-xs'>
          {playerHP}
        </div>
        <div className='w-full'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default HealthHUD
