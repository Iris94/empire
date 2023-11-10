import React from 'react'
import Image from 'next/image'
import { GiEnergySword, GiHeartPlus } from 'react-icons/gi';
import { EnemyInterfaceProps } from '../../states&imports/interfaces';

const EnemiesTemplate: React.FC<EnemyInterfaceProps> = ({
    enemyClass,
    enemyHP,
    enemyImage,
    enemyAttack
}) => {


  return (
    <>
        <div className='h-fit w-full '>
          <Image src={enemyImage} alt='soldiers' />
      </div>
      <div className='h-fit w-full blue-card text-red-500 text-center'>
        <p>{enemyClass}</p>
      </div>
      <div className='h-fit w-full'>
        <hr 
        id='enemyHP'
        className='bg-red-500 border-none w-full h-1'/>
      </div>
      <div className='h-fit w-full flex justify-between items-center'>
          <div className='text-red-500 w-fit h-fit'>{enemyHP}</div>
          <div className='text-red-500 w-fit h-fit'><GiHeartPlus /></div>
      </div>
      <div className='h-fit w-full flex justify-between items-center'>
          <div className='text-zinc-400 w-fit h-fit'>{enemyAttack}</div>
          <div className='text-zinc-400 w-fit h-fit'><GiEnergySword /></div>
      </div>
    </>
  )
}

export default EnemiesTemplate