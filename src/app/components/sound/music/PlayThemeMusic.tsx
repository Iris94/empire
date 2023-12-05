const themeSong = new Audio('/gameMusic/themeMusic1.mp3');

const PlayThemeMusic = (themeMusic : boolean) => {
  if (themeMusic) {
    themeSong.volume = 0.7;
    themeSong.play();
  } else {
    themeSong.pause();
  }
}

export { themeSong, PlayThemeMusic };