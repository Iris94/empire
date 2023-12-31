import EnemyDamage from "./EnemyDamage";

export const EnemyAttackMovement = async (
    enemies: any,
    playerArmor : number,
    playerHealth : number,
    setPlayerHealth : any,
    setEnemyScreenDmg: any,
    dispatch : any) => {

    let damage : number = 0;

    const attackEnemy = async (enemy: any) => {
      return new Promise<void>((resolve) => {
        const eachDamage = EnemyDamage(enemy.props.enemyAttack, playerArmor, setEnemyScreenDmg)
        setTimeout(() => {
          damage += eachDamage;
          const roundedDamage = Math.round(playerHealth - damage)
          dispatch(setPlayerHealth(roundedDamage));
          resolve();
        }, 3000); 
      });
    };
  
    const attackNextEnemy = async (index: number) => {
      if (index < enemies.length) {
        await attackEnemy(enemies[index]);
        await attackNextEnemy(index + 1);
      } 
    };
  
    await attackNextEnemy(0);
    
    damage = 0;
    
  };

