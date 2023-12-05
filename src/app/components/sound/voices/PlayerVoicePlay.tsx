

const PlayerVoicePlay = (audioPath : string) => {
        const voiceOver = new Audio (audioPath)
        voiceOver.volume = 0.7;
        voiceOver.play()
  };
  
  export default PlayerVoicePlay;
  