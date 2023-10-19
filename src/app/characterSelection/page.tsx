'use client';

import React, { useState } from 'react';
import SelectCharacter from "../components/characterSelectionComp/selectChar/SelectCharacter";
import AboutCharacter from "../components/characterSelectionComp/aboutChar/AboutCharacter";

const CharacterSelection = () => {
  const [showAboutCharacter, setShowAboutCharacter] = useState(false);
  
  return (
    <main className="main-background w-screen h-screen z-0 flex items-center justify-center p-9 lg:gap-8">
      <SelectCharacter setShowAboutCharacter={setShowAboutCharacter} />
      <AboutCharacter showAboutCharacter={showAboutCharacter} />
    </main>
  );
}

export default CharacterSelection;
