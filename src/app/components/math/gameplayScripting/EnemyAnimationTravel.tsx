

const  EnemyAnimationTravel = (xCoordinates : number) => {
    let xReturn : number = 0

    switch (true) {
        case xCoordinates > 30:
            xReturn = -40
            break;
        case xCoordinates > 15:
            xReturn = -20
            break;
        case xCoordinates > 5:
            xReturn = -10
            break;
        case xCoordinates < 5 && xCoordinates > -5:
            xReturn = 0;
            break;
        case xCoordinates < -5 && xCoordinates > -15:
            xReturn = 10
            break;
        case xCoordinates < -15 && xCoordinates > -30:
            xReturn = 20
            break;
        case xCoordinates < -30:
            xReturn = 40
        default:
            break;
    }

    return xReturn
}

export default EnemyAnimationTravel;