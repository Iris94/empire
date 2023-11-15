const AnimationTravel = (xCoordinates: number) => {
  let direction: number = 0;

  switch (true) {
    case xCoordinates > 300:
      direction = 75;
      break;
    case xCoordinates > 200 && xCoordinates < 300:
      direction = 60;
      break;
    case xCoordinates > 115 && xCoordinates < 200:
      direction = 45;
      break;
    case xCoordinates > 50 && xCoordinates < 115:
      direction = 30;
      break;
    case xCoordinates > 20 && xCoordinates < 50:
      direction = 15;
      break;
    case xCoordinates > -20 && xCoordinates < 20:
      direction = 0;
      break;
    case xCoordinates > -50 && xCoordinates < -20:
      direction = -15;
      break;
    case xCoordinates > -115 && xCoordinates < -50:
      direction = -30;
      break;
    case xCoordinates > -200 && xCoordinates < -115:
      direction = -45;
      break;
    case xCoordinates > -300 && xCoordinates < -200:
      direction = -60;
      break;
    case xCoordinates < -300:
      direction = -75;
      break;
    default:
      direction = 0
      break;
  }

  return direction;
};

export default AnimationTravel;
