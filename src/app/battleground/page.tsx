
import React from 'react';
import Enemies from './Enemies';
import Map from './Map';
import Player from './Player';


const Battleground = () => {

  return (
    <main className='w-screen h-screen overflow-hidden flex flex-col'>
      <Enemies />
      <Map />
      <Player />
    </main>
  );
}

export default Battleground;
