'use client'

import React from 'react';
import { ChaosArcher, ChaosMage, ChaosSoldier } from '@/app/components/states&imports/imageImport';
import EnemyInterface from '../gameplayScripting/EnemyInterface';
import { StaticImageData } from 'next/image';


const getCorrectImageForEnemy = (randomEnemyName: string) => {
  const footSoldiers: Record<string, StaticImageData> = {
    Archer : ChaosArcher,
    Mage : ChaosMage,
    Soldier : ChaosSoldier,
  };

  return footSoldiers[randomEnemyName];
};


const GenerateEnemies = ({
  enemyClass,
  enemyHP,
  enemyIndex,
  enemyAttack
}: any) => {
  const correctEnemyImage = getCorrectImageForEnemy(enemyClass);
  
  return (
      <EnemyInterface
        enemyImage={correctEnemyImage}
        enemyClass={enemyClass}
        enemyHP={enemyHP}
        enemyAttack={enemyAttack}
        enemyIndex={enemyIndex}
      />
  );
};

export default GenerateEnemies;