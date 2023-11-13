import React from 'react'
import './hud.css';

const HealthBar = ({ playerHealth, maxPlayerHealth }: { playerHealth: number; maxPlayerHealth: number }) => {
  
  const diabloHeartStyle = {
    background: `linear-gradient(to bottom, transparent 0% ${((1 - playerHealth / maxPlayerHealth) * 100).toFixed(2)}%, #790000 0%)`,
  };

  return (
    <div className='h-fit items-center flex flex-col'>
        <div className='w-full h-full diabloHeart flex items-center justify-center text-white'
        style={diabloHeartStyle}>
          {playerHealth}
        </div>
        <div className='w-full'>
          <hr className='w-full h-3 paper-card'></hr>
        </div>
    </div>
  )
}

export default HealthBar
