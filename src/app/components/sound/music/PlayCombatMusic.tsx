

const PlayCombatMusic = (deathScreen : boolean) => {
    const startCombatMusic = () => {
        if (deathScreen) return themeSong.pause()
        themeSong.volume = 0.3
        themeSong.play()
    }

    startCombatMusic()
}

export default PlayCombatMusic

const themeSong = new Audio ('/gameMusic/combatMusic1.mp3')