'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/GlobalRedux/store'
import './hud.css'

const ManaHUD = () => {
  const {playerMana} = useSelector((state: RootState) => state.player)

  return (
    <div className='w-1/6 h-full diabloMana items-center flex flex-col'>
        <div className='w-full h-full diabloMana flex items-center justify-center text-white text-xs'>
          {playerMana}
        </div>
        <div className='w-full'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default ManaHUD