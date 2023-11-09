export default function numberOfSpawns(level : number) {
    let startingPoint = 1;

    if (level === 1) {
        startingPoint = 1;
    } else if (level % 5 === 0 && level > 1 && startingPoint !== 8) {
        startingPoint++;
    }

    return Math.floor(Math.random() * 3) + startingPoint;
}



