'use client'

import React, {useEffect} from 'react'
import { Map1, Map2, Map3, Map4, Map6, Map7, Map8, Map10 } from '../../states&imports/imageImport';
import Image from 'next/image';
import DeathScreen from '../../sideScreens/DeathScreen';
import { useGame } from '@/app/context/GameContext';

const mapImages = [Map1, Map2, Map3, Map4, Map6, Map7, Map8, Map10];

const Map = () => {
  const { deathScreen, nextLevel, generatedEnemies, selectedMap, updateGeneratedMap } = useGame()

  useEffect(() => {
    updateGeneratedMap(mapImages)
  }, [nextLevel, generatedEnemies])

  return (
    <>
    <div className='z-0 w-full h-screen absolute flex items-center justify-center'>
      <Image src={selectedMap} alt='Map' fill className="cover" />
    </div>

    {deathScreen && (<DeathScreen />)}
    </>
  )
}

export default Map