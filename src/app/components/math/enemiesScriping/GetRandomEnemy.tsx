import enemyStatsCalculator from './EnemyStatsCalculator';

  
export default function GetRandomEnemy (level : number) {
    const updatedEnemyTypes = enemyStatsCalculator(level)

    const enemyNames = Object.keys(updatedEnemyTypes);
    const randomIndex = Math.floor(Math.random() * enemyNames.length);
    const randomEnemyName = enemyNames[randomIndex];
    const randomEnemy = updatedEnemyTypes[randomEnemyName];
    return randomEnemy;
  };