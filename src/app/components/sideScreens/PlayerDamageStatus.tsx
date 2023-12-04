

import React, { useEffect } from 'react'
import './sideScreens.css'

const PlayerDamageStatus = ({playerScreenDmg} : {playerScreenDmg : string}) => {

  const isCritical = playerScreenDmg.includes('Critical');
  const isMissed = playerScreenDmg.includes('Missed');

  const textClass = isCritical ? 'text-orange-500' : isMissed ? 'text-zinc-500' : 'text-zinc-100';

  return (
    <div className={`player-screen-dmg ${textClass}`}>
      {playerScreenDmg}
    </div>
  )
}

export default PlayerDamageStatus

