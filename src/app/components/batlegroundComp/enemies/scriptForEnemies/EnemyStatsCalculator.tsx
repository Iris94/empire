import enemyTypesData from '../../../enemyTypes.json';
import levelState from '../../levelState';

interface EnemyType {
    enemyClass: string;
    enemyHP: number;
    enemyPoints: number;
    name: string;
  }
  
const enemyTypes: Record<string, EnemyType> = enemyTypesData;


const enemyStatsCalculator = () => {
    const updatedEnemyTypes: Record<string, EnemyType> = {};

    for (const enemyName in enemyTypes) {
      if (enemyTypes.hasOwnProperty(enemyName)) {
        const enemy = enemyTypes[enemyName];
        const levelNumber : number = levelState();
        const levelModifier = (levelNumber - 1) * 10;
        const lowerBoundHP = Math.floor(enemy.enemyHP + levelModifier * 0.9);
        const upperBoundHP = Math.floor(enemy.enemyHP+ levelModifier * 1.1);
        const lowerBoundPT = Math.floor(enemy.enemyPoints + levelModifier * 0.9);
        const upperBoundPT = Math.floor(enemy.enemyPoints+ levelModifier * 1.1);
        const updatedHP = Math.floor(lowerBoundHP + Math.random() * (upperBoundHP - lowerBoundHP + 1));
        const updatedPT = Math.floor(lowerBoundPT + Math.random() * (upperBoundPT - lowerBoundPT + 1));

        updatedEnemyTypes[enemyName] = {
          ...enemy,
          enemyHP : updatedHP,
          enemyPoints : updatedPT
        }
      }
    }

    return updatedEnemyTypes
}

export default enemyStatsCalculator