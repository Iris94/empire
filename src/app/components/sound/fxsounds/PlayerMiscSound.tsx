

const PlayerMiscSound = (playerClass: string) => {
    const knight = new Audio ('/fx/knightFx.mp3')
    const mage = new Audio ('/fx/mageFx.mp3')
    const assassin = new Audio ('/fx/assassinFx.mp3')
    
  
    const playRandomAudio = (audio : any) => {
        const classFx = audio;
        classFx.volume = 0.3;
        classFx.play();
    };
  
    switch (playerClass) {
      case 'Knight':
        playRandomAudio(knight);
        break;
      case 'Mage':
        playRandomAudio(mage);
        break;
      case 'Assassin':
        playRandomAudio(assassin);
        break;
      default:
        break;
    }
  };
  
  export default PlayerMiscSound;


