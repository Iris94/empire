import enemyStatsCalculator from './EnemyStatsCalculator';

  
export default function getRandomEnemy () {
    const updatedEnemyTypes = enemyStatsCalculator()

    const enemyNames = Object.keys(updatedEnemyTypes);
    const randomIndex = Math.floor(Math.random() * enemyNames.length);
    const randomEnemyName = enemyNames[randomIndex];
    const randomEnemy = updatedEnemyTypes[randomEnemyName];
    return randomEnemy;
  };