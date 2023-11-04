'use client'

import React from 'react';
import { ChaosArcher, ChaosMage, ChaosSoldier } from '@/app/components/states&imports/imageImport';
import EnemyInterface from '../gameplayScripting/EnemyInterface';
import { StaticImageData } from 'next/image';
import getRandomEnemy from './GetRandomEnemy'



const getCorrectImageForEnemy = (randomEnemyName: string) => {
  const footSoldiers: Record<string, StaticImageData> = {
    ChaosArcher,
    ChaosMage,
    ChaosSoldier,
  };

  return footSoldiers[randomEnemyName];
};


const GenerateEnemies = (enemyIndex : any) => {
  const randomEnemy = getRandomEnemy();
  const correctEnemyImage = getCorrectImageForEnemy(randomEnemy.name);

  return (
      <EnemyInterface
        enemyImage={correctEnemyImage}
        enemyClass={randomEnemy.enemyClass}
        enemyHP={randomEnemy.enemyHP}
        enemyPoints={randomEnemy.enemyPoints}
        enemyIndex={enemyIndex}
      />
  );
};

export default GenerateEnemies;
