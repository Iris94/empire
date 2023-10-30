'use client'

import React from 'react'
import { RootState } from '@/app/GlobalRedux/store'
import { useSelector } from 'react-redux'

const LevelPoints = () => {
  const {level} = useSelector((state: RootState) => state.levelReducer)

  return (
    <div className='flex flex-col'>
        <p>Level</p>
        <p className='flex justify-center items-center'>{level}</p>
    </div>
  )
}

export default LevelPoints