import enemyTypesData from '../../enemyTypes.json';

interface EnemyType {
  enemyClass: string;
  enemyHP: number;
  initialHP: number;
  enemyAttack: number;
  enemyArmor: number;
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
    const lowerBoundHP = Math.floor(enemy.enemyHP + levelModifier * 0.9);
    const upperBoundHP = Math.floor(enemy.enemyHP + levelModifier * 1.5);
    const lowerBoundPT = Math.floor(enemy.enemyAttack + levelModifier * 0.9);
    const upperBoundPT = Math.floor(enemy.enemyAttack + levelModifier * 1.5);
    const lowerBoundArmor = Math.floor(enemy.enemyArmor + levelModifier * 0.9);
    const upperBoundArmor = Math.floor(enemy.enemyArmor + levelModifier * 1.5);
    const updatedHP = Math.floor(lowerBoundHP + Math.random() * (upperBoundHP - lowerBoundHP + 1));
    const updatedPT = Math.floor(lowerBoundPT + Math.random() * (upperBoundPT - lowerBoundPT + 1));
    const updatedArmor = Math.floor(lowerBoundArmor + Math.random() * (upperBoundArmor - lowerBoundArmor + 1));

    updatedEnemyTypes[enemyName] = {
      ...enemy,
      enemyHP: updatedHP,
      initialHP: updatedHP,
      enemyAttack: updatedPT,
      enemyArmor: updatedArmor
    };
  }

  return updatedEnemyTypes;
};


export default enemyStatsCalculator