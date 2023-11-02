'use client'

import React from 'react';
import { ChaosArcher, ChaosMage, ChaosSoldier } from '@/app/components/states&imports/imageImport';
import EnemyTemplate from '../../batlegroundComp/enemies/EnemyTemplate';
import { StaticImageData } from 'next/image';
import getRandomEnemy from '../scriptForEnemies/GetRandomEnemy';

const getCorrectImageForEnemy = (randomEnemyName: string) => {
  const footSoldiers: Record<string, StaticImageData> = {
    ChaosArcher,
    ChaosMage,
    ChaosSoldier,
  };

  return footSoldiers[randomEnemyName];
};

const EnemyInterface = () => {
  const randomEnemy = getRandomEnemy();
  const correctEnemyImage = getCorrectImageForEnemy(randomEnemy.name);

  return (
    <EnemyTemplate
      enemyImage={correctEnemyImage}
      enemyClass={randomEnemy.enemyClass}
      enemyHP={randomEnemy.enemyHP}
      enemyPoints={randomEnemy.enemyPoints}
    />
  );
};

export default EnemyInterface;
