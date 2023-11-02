import levelState from '../../states&imports/LevelState'

let startingPoint = 1;

export default function numberOfSpawns() {
    const currentLevel = levelState();
    if (currentLevel === 1) {
        startingPoint = 1;
    } else if (currentLevel % 5 === 0 && currentLevel > 1 && startingPoint !== 8) {
        startingPoint++;
    }

    let numberOfEnemySpawns = Math.floor(Math.random() * 3) + startingPoint;
    return numberOfEnemySpawns;
}



