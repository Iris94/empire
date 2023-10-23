'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'
import './hud.css'

const ManaHUD = () => {
  const {playerMana} = useSelector((state: RootState) => state.player)

  return (
    <div className='diabloMana w-1/6 items-center flex flex-col'>
        <div className='w-full diabloMana flex items-center justify-center text-white'>
          {playerMana}
        </div>
        <div className='w-2/3'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default ManaHUD