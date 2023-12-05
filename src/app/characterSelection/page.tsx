'use client';

import React, { useState, useEffect } from 'react';
import SelectCharacter from "../components/characterSelectionComp/selectChar/SelectCharacter";
import AboutCharacter from "../components/characterSelectionComp/aboutChar/AboutCharacter";
import PlayThemeMusic from '../components/sound/music/PlayThemeMusic';

const CharacterSelection = () => {
  const [showAboutCharacter, setShowAboutCharacter] = useState(false);
  const [themeMusic, setThemeMusic] = useState(true)
  const themeSong = new Audio ('/gameMusic/themeMusic1.mp3')

  useEffect(() => {
    PlayThemeMusic(themeMusic, themeSong)
  }, [themeMusic])

  return (
    <main className="main-background w-screen h-screen z-0 flex items-center justify-center p-9 lg:gap-8 gap-3">
      <SelectCharacter setShowAboutCharacter={setShowAboutCharacter} />
      <AboutCharacter
        showAboutCharacter={showAboutCharacter}
        setThemeMusic={setThemeMusic} />
    </main>
  );
}

export default CharacterSelection;
