

export default function EnemyDamage (
    enemyOffense : any,
    playerDeffense : number,
    setEnemyScreenDmg: any) {
       
    let returnedDamage : number = 0;
    const excessOffense : number = Math.max(enemyOffense - playerDeffense, 0); 
    const criticalChance: number = excessOffense / 100;
    const isCriticalHit: boolean = Math.random() <= criticalChance;

    const negativeOffense : number = Math.max(enemyOffense - playerDeffense, 0);
    const missChance: number = negativeOffense / 100;
    const isMissedHit: boolean = Math.random() <= missChance
    
  if (enemyOffense > playerDeffense) {
        if (isCriticalHit) {
            returnedDamage = enemyOffense + (excessOffense * criticalChance);
            setEnemyScreenDmg(`Critical Hit: ${returnedDamage}`)
        } else {
            returnedDamage = enemyOffense + excessOffense;
            setEnemyScreenDmg(`Damage: ${returnedDamage}`)
        }


    } else {
        if (isMissedHit) {
            returnedDamage = 0;
            setEnemyScreenDmg('Missed')
        } else {
            returnedDamage = enemyOffense
            setEnemyScreenDmg(`Damage: ${returnedDamage}`)
        }
    }
    return returnedDamage
}