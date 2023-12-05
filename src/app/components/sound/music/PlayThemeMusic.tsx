

const PlayThemeMusic = (themeMusic: boolean, themeSong : any) => {

  if (themeSong.current) {
    if (themeMusic) {
      themeSong.current.volume = 0.7;
      themeSong.current.play();
    } else {
      themeSong.current.pause();
    }
  }
};

export default PlayThemeMusic;
