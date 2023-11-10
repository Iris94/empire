import React from 'react';
import Enemies from '../components/batlegroundComp/enemies/Enemies';
import World from '../components/batlegroundComp/world/World';
import Player from '../components/batlegroundComp/player/Player';
import { GameProvider } from '../context/GameContext';

const Battleground = () => {

  return (
    <GameProvider>
    <main className='w-screen h-screen flex flex-col'>
      <Enemies />
      <World />
      <Player />
    </main>
    </GameProvider>
  );
}

export default Battleground;
