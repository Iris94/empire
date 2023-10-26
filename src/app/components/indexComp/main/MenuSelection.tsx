import React from 'react';
import Listing from './listing';

const MenuSelection: React.FC = () => (
  <section className="w-4/6 h-4/6 z-10 flex justify-center items-center flex-col">
    <ul className="flex flex-col gap-2 w-2/3 h-full justify-center">
      <Listing
      width="w-full"
      jumpToAnotherPageFromMenu="/characterSelection"
      whereToFromMenu="Play Game"
      />

      <Listing 
      width="w-5/6" 
      whereToFromMenu="Inventory" 
      opacity="opacity-75" />

      <Listing 
      width="w-4/6" 
      whereToFromMenu="Options" 
      opacity="opacity-75" />

      <Listing 
      width="w-3/6" 
      whereToFromMenu="Leaderboard" 
      opacity="opacity-75" />
    </ul>
  </section>
);

export default MenuSelection;
