import enemyTypesData from '../../enemyTypes.json';

interface EnemyType {
  enemyClass: string;
  enemyHP: number;
  enemyPoints: number;
  name: string;
}

const enemyTypes: Record<string, EnemyType> = enemyTypesData;


const enemyStatsCalculator = (level : number) => {
  const updatedEnemyTypes: Record<string, EnemyType> = {};

  for (const enemyName in enemyTypes) {
    if (!enemyTypes.hasOwnProperty(enemyName)) {
      continue;
    }

    const enemy = enemyTypes[enemyName];
    const levelNumber = level
    const levelModifier = (levelNumber - 1) * 10;
    const lowerBoundHP = Math.floor(enemy.enemyHP + levelModifier * 0.8);
    const upperBoundHP = Math.floor(enemy.enemyHP + levelModifier * 1.3);
    const lowerBoundPT = Math.floor(enemy.enemyPoints + levelModifier * 0.9);
    const upperBoundPT = Math.floor(enemy.enemyPoints + levelModifier * 1.1);
    const updatedHP = Math.floor(lowerBoundHP + Math.random() * (upperBoundHP - lowerBoundHP + 1));
    const updatedPT = Math.floor(lowerBoundPT + Math.random() * (upperBoundPT - lowerBoundPT + 1));

    updatedEnemyTypes[enemyName] = {
      ...enemy,
      enemyHP: updatedHP,
      enemyPoints: updatedPT,
    };
  }

  return updatedEnemyTypes;
};


export default enemyStatsCalculator