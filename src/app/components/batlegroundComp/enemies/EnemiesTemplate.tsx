import React from 'react'
import Image from 'next/image'
import { GiEnergySword, GiHeartPlus, GiShield } from 'react-icons/gi';
import { EnemyInterfaceProps } from '../../states&imports/interfaces';

const EnemiesTemplate: React.FC<EnemyInterfaceProps> = ({
    enemyClass,
    enemyHP,
    initialHP,
    enemyImage,
    enemyAttack,
    enemyArmor
}) => {

  const healthPercentage = (enemyHP / initialHP) * 100;
  return (
    <>
        <div className='h-fit w-full enemy-click-class '>
          <Image src={enemyImage} alt='soldiers' className='enemy-click-class' />
      </div>
      <div className='h-fit w-full blue-card text-red-500 text-center enemy-click-class'>
        <p className='enemy-click-class'>{enemyClass}</p>
      </div>
      <div className='h-fit w-full enemy-click-class'>
        <hr 
        id='enemyHP'
        className='bg-red-500 border-none h-1 enemy-click-class'
        style={{ width: `${healthPercentage}%` }}/>
      </div>
      <div className='h-fit w-full flex justify-between items-center enemy-click-class'>
          <div className='text-red-500 w-fit h-fit enemy-click-class'>{enemyHP}</div>
          <div className='text-red-500 w-fit h-fit enemy-click-class'><GiHeartPlus /></div>
      </div>
      <div className='h-fit w-full flex justify-between items-center enemy-click-class'>
          <div className='text-zinc-400 w-fit h-fit enemy-click-class'>{enemyAttack}</div>
          <div className='text-zinc-400 w-fit h-fit enemy-click-class'><GiEnergySword /></div>
      </div>
      <div className='h-fit w-full flex justify-between items-center enemy-click-class'>
          <div className='text-zinc-400 w-fit h-fit enemy-click-class'>{enemyArmor}</div>
          <div className='text-zinc-400 w-fit h-fit enemy-click-class'><GiShield /></div>
      </div>
    </>
  )
}

export default EnemiesTemplate