import React from 'react'
import './hud.css';

const HealthBar: React.FC<{ playerHealth: number }> = ({ playerHealth}) => {

  return (
    <div className='h-fit diabloHeart items-center flex flex-col'>
        <div className='w-full h-full diabloHeart flex items-center justify-center text-white'>
          {playerHealth}
        </div>
        <div className='w-full'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default HealthBar
