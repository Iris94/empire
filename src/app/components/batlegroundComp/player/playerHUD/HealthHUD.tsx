'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'
import './hud.css';

const healthHUD = () => {
  const {playerHP} = useSelector((state: RootState) => state.player)

  return (
    <div className='w-1/6 diabloHeart items-center flex flex-col'>
        <div className='w-full diabloHeart flex items-center justify-center text-white'>
          {playerHP}
        </div>
        <div className='w-2/3'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default healthHUD
