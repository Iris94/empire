
import React from 'react';
import Enemies from '../components/batlegroundComp/enemies/Enemies';
import Map from '../components/batlegroundComp/map/Map';
import Player from '../components/batlegroundComp/player/Player';


const Battleground = () => {

  return (
    <main className='w-screen h-screen flex flex-col'>
      <Enemies />
      <Map />
      <Player />
    </main>
  );
}

export default Battleground;
