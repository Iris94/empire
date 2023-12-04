

export default function PlayerDamage (
    enemyDefense : any,
    playerOffense : number,
    setPlayerScreenDmg: React.Dispatch<React.SetStateAction<string>>) {
       
    let returnedDamage : number = 0;
    const excessOffense : number = Math.max(playerOffense - enemyDefense, 0); 
    const criticalChance: number = excessOffense / 100;
    const isCriticalHit: boolean = Math.random() <= criticalChance;

    const negativeOffense : number = Math.max(enemyDefense - playerOffense, 0);
    const missChance: number = negativeOffense / 100;
    const isMissedHit: boolean = Math.random() <= missChance
    
    if (playerOffense > enemyDefense) {
        if (isCriticalHit) {
            returnedDamage = playerOffense + (excessOffense * criticalChance);
            setPlayerScreenDmg(`Critical Hit: ${returnedDamage}`)
        } else {
            returnedDamage = playerOffense + excessOffense;
            setPlayerScreenDmg(`Damage: ${returnedDamage}`)
        }


    } else {
        if (isMissedHit) {
            returnedDamage = 0;
            setPlayerScreenDmg('Missed')
        } else {
            returnedDamage = playerOffense
            setPlayerScreenDmg(`Damage: ${returnedDamage}`)
        }
    }

    
    return returnedDamage
}