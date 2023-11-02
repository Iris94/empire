import React from 'react'
import './hud.css'

const ManaBar: React.FC<{playerMana : number}> = ({playerMana}) => {
  return (
    <div className='h-fit diabloMana items-center flex flex-col'>
        <div className='w-full h-full diabloMana flex items-center justify-center text-white'>
          {playerMana}
        </div>
        <div className='w-full'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default ManaBar