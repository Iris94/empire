

const PlayerVoice = (playerClass: string): string => {
  let classVoicePath = '';

  const knightArray = [
    '/voices/knightVoice1.mp3',
    '/voices/knightVoice2.mp3',
    '/voices/knightVoice3.mp3',
    '/voices/knightVoice4.mp3',
    '/voices/knightVoice5.mp3',
  ];

  const mageArray = [
    '/voices/mageVoice1.mp3',
    '/voices/mageVoice2.mp3',
    '/voices/mageVoice3.mp3',
    '/voices/mageVoice4.mp3',
    '/voices/mageVoice5.mp3',
  ];

  const assassinArray = [
    '/voices/assassinVoice1.mp3',
    '/voices/assassinVoice2.mp3',
    '/voices/assassinVoice3.mp3',
    '/voices/assassinVoice4.mp3',
    '/voices/assassinVoice5.mp3',
  ];

  const playRandomAudio = (audioArray: string[]): void => {
    const randomIndex = Math.floor(Math.random() * audioArray.length);
    classVoicePath = audioArray[randomIndex];
  };

  switch (playerClass) {
    case 'Knight':
      playRandomAudio(knightArray);
      break;
    case 'Mage':
      playRandomAudio(mageArray);
      break;
    case 'Assassin':
      playRandomAudio(assassinArray);
      break;
    default:
      break;
  }

  return classVoicePath;
};

export default PlayerVoice;
