

const PlayCombatMusic = (deathScreen : boolean, themeSong : any) => {

    if (themeSong.current) {
        if (!deathScreen) {
          themeSong.current.volume = 0.7;
          themeSong.current.play();
        } else {
          themeSong.current.pause();
        }
      }
}

export default PlayCombatMusic
