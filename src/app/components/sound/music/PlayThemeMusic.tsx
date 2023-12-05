

const PlayThemeMusic = (themeMusic : boolean, themeSong : any) => {
    
    if (themeMusic) {
        themeSong.volume = 0.7;
        themeSong.play()
    } else {
        themeSong.pause()
    }
}

export default PlayThemeMusic
