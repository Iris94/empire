import React from 'react'
import Image, { StaticImageData } from 'next/image';
import './enemies.css'

interface EnemyTemplateProps {
  enemyImage: StaticImageData;
  enemyClass: string;
  enemyHP: number,
  enemyPoints: number
}

const EnemyTemplate: React.FC<EnemyTemplateProps> = (
  { enemyImage, 
    enemyClass,
    enemyHP,
    enemyPoints }
  ) => {

  return (
    <div className='flex flex-col p-2 dark-blue-card h-fit enemies-width-css'>
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
      <div className='h-fit w-full text-red-500 flex justify-center items-center'>
        <p>{enemyHP}</p>
      </div>
      <div className='h-fit w-full text-zinc-500 flex justify-center items-center'>
        <p>{enemyPoints}</p>
      </div>
    </div>
  )
}

export default EnemyTemplate