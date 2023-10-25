'use client'

import React, {useState, useEffect} from 'react'
import { ChaosArcher, ChaosMage, ChaosSoldier } from '@/app/imageImport'
import Image from 'next/image';
import './enemies.css'

const initialHealth = 100;
const footSoldiers = [ChaosArcher, ChaosMage, ChaosSoldier];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * footSoldiers.length);
    return footSoldiers[randomIndex];
  };
  
  const getImageTypeText = (image : any) => {
    if (image === ChaosSoldier) {
      return 'Soldier';
    } else if (image === ChaosArcher) {
      return 'Archer';
    } else if (image === ChaosMage) {
      return 'Mage';
    }
    return 'Unknown'; 
  };



const EnemyTemplate = () => {
    const [health, setHealth] = useState(initialHealth);

    const decreaseHealth = (amount : any) => {
        setHealth((prevHealth) => prevHealth - amount);
      };


      useEffect(() => {
        const maxWidth = 100; 
        const newWidth = (health / initialHealth) * maxWidth;
        const healthBar = document.getElementById('enemyHP');
        if (healthBar) {
          healthBar.style.width = `${newWidth}%`;
        }
      }, [health]);


    const randomImage = getRandomImage();
    const imageTypeText = getImageTypeText(randomImage);

  return (
    <div className='flex flex-col p-2 dark-blue-card h-fit enemies-width-css'>
      <div className='h-fit w-full '>
          <Image src={randomImage} alt='soldiers' />
      </div>
      <div className='h-fit w-full blue-card text-red-500 text-center'>
        <p>{imageTypeText}</p>
      </div>
      <div className='h-fit w-full'>
        <hr 
        id='enemyHP'
        className='bg-red-500 border-none w-full h-1'/>
      </div>
    </div>
  )
}

export default EnemyTemplate
