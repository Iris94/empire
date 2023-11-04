import React from 'react';
import Enemies from '../components/batlegroundComp/enemies/Enemies';
import Map from '../components/batlegroundComp/map/Map';
import Player from '../components/batlegroundComp/player/Player';
import { GameProvider } from '../context/GameContext';

const Battleground = () => {

  return (
    <GameProvider>
    <main className='w-screen h-screen flex flex-col'>
      <Enemies />
      <Map />
      <Player />
    </main>
    </GameProvider>
  );
}

export default Battleground;
