

const EnemiesVoice = () => {
    const chaosArray = [chaos1, chaos2, chaos3];
  
    const playRandomAudio = (audioArray: any) => {
        const randomIndex = Math.floor(Math.random() * audioArray.length);
        const selectedAudio = audioArray[randomIndex];
        selectedAudio.volume = 0.5;
        selectedAudio.play();
    };

    return playRandomAudio(chaosArray)
}

export default EnemiesVoice


const chaos1 = new Audio ('/voices/chaosGrowl1.mp3')
const chaos2 = new Audio ('/voices/chaosGrowl2.mp3')
const chaos3 = new Audio ('/voices/chaosGrowl3.mp3')