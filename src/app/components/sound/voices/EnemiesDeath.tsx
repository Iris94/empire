

const EnemiesDeath = () => {
    const chaosArray = [death1, death2, death3];
  
    const playRandomAudio = (audioArray: any) => {
        const randomIndex = Math.floor(Math.random() * audioArray.length);
        const selectedAudio = audioArray[randomIndex];
        selectedAudio.volume = 0.4;
        selectedAudio.play();
    };

    return playRandomAudio(chaosArray)
}

export default EnemiesDeath


const death1 = new Audio ('/voices/chaosDeath1.mp3')
const death2 = new Audio ('/voices/chaosDeath2.mp3')
const death3 = new Audio ('/voices/chaosDeath3.mp3')