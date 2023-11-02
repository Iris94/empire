'use client'
import React from 'react';
import Enemies from '../components/batlegroundComp/enemies/Enemies';
import Map from '../components/batlegroundComp/map/Map';
import Player from '../components/batlegroundComp/player/Player';
import MasterInterface from '../components/math/gameplayScripting/MasterInterface';

const Battleground = () => {

  return (
    <main className='w-screen h-screen flex flex-col'>
      <Enemies />
      <Map />
      <Player />
      <MasterInterface />
    </main>
  );
}

export default Battleground;
