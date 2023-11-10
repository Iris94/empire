export default function NumberOfSpawns(level: number): number {
    let startingPoint = Math.min(8, Math.ceil(level / 5)); 
    return Math.floor(Math.random() * 3) + startingPoint;
}
