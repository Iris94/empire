

const PlayThemeMusic = (themeMusic : boolean) => {
    
    if (themeMusic) {
        themeSong.volume = 0.7;
        themeSong.play()
    } else {
        themeSong.pause()
    }
}

export default PlayThemeMusic

const themeSong = new Audio ('/gameMusic/themeMusic1.mp3')