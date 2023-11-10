export default function DiceRoll(playerPoints : number, playerAttack : number, generatedEnemies : any) {
    
    const enemiesDice : number = generatedEnemies.reduce((sum: any, enemy: { props: { enemyAttack: any; }; }) => sum + enemy.props.enemyAttack, 0)
    const playerDice : number = playerAttack * playerPoints
    
    let diceStart : string;

    if (playerDice > enemiesDice) {
        diceStart = 'player'
    } else {
        diceStart = 'enemy'
    }
    
    return diceStart
}