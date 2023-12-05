'use client'

import React, { useEffect, useRef } from 'react'
import { Map1, Map2, Map3, Map4, Map6, Map7, Map8, Map10 } from '../../states&imports/imageImport';
import Image from 'next/image';
import DeathScreen from '../../sideScreens/DeathScreen';
import LevelDelayScreen from '../../sideScreens/LevelDelayScreen';
import PlayCombatMusic from '../../sound/music/PlayCombatMusic';
import { useGame } from '@/app/context/GameContext';

const mapImages = [Map1, Map2, Map3, Map4, Map6, Map7, Map8, Map10];

const Map = () => {
  const { attackMode, deathScreen, nextLevel, selectedMap, updateGeneratedMap, levelDelay, setLevelDelay } = useGame()


  const combatSong = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio('/gameMusic/themeMusic1.mp3') : undefined
  );


  useEffect(() => {
    updateGeneratedMap(mapImages)
  }, [nextLevel])

  useEffect(() => {
    if (attackMode) {
      PlayCombatMusic(deathScreen, combatSong)
    }
  }, [attackMode])

  useEffect(() => {
    if (levelDelay) {
      setTimeout(() => {
        setLevelDelay(false)
      }, 2500);
    }
  }, [levelDelay])

  return (
    <>
      <div className='z-0 w-full h-screen absolute flex items-center justify-center'>
        <Image src={selectedMap} alt='Map' fill className="cover" />
      </div>

      {deathScreen && (<DeathScreen />)}
      {levelDelay && (<LevelDelayScreen />)}
    </>
  )
}

export default Map