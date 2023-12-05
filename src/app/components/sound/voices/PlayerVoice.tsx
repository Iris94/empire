

const PlayerVoice = (playerClass: string) => {
    const knightArray = [knight1, knight2, knight3, knight4, knight5];
    const mageArray = [mage1, mage2, mage3, mage4, mage5];
    const assassinArray = [assassin1, assassin2, assassin3, assassin4, assassin5];
  
    const playRandomAudio = (audioArray: any) => {
        const randomIndex = Math.floor(Math.random() * audioArray.length);
        const selectedAudio = audioArray[randomIndex];
        selectedAudio.volume = 0.5;
        selectedAudio.play();
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
  };
  
  export default PlayerVoice;


const knight1 = new Audio ('/voices/knightVoice1.mp3')
const knight2 = new Audio ('/voices/knightVoice2.mp3')
const knight3 = new Audio ('/voices/knightVoice3.mp3')
const knight4 = new Audio ('/voices/knightVoice4.mp3')
const knight5 = new Audio ('/voices/knightVoice5.mp3')

const mage1 = new Audio ('/voices/mageVoice1.mp3')
const mage2 = new Audio ('/voices/mageVoice2.mp3')
const mage3 = new Audio ('/voices/mageVoice3.mp3')
const mage4 = new Audio ('/voices/mageVoice4.mp3')
const mage5 = new Audio ('/voices/mageVoice5.mp3')

const assassin1 = new Audio ('/voices/assassinVoice1.mp3')
const assassin2 = new Audio ('/voices/assassinVoice2.mp3')
const assassin3 = new Audio ('/voices/assassinVoice3.mp3')
const assassin4 = new Audio ('/voices/assassinVoice4.mp3')
const assassin5 = new Audio ('/voices/assassinVoice5.mp3')