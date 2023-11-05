'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";


interface GameContextType {
  attackMode: boolean;
  setAttackMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateCombinedHealth: (change: any) => void;
  setCombinedHealth: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: GameContextType = {
  attackMode: false,
  setAttackMode: () => { },
  updateCombinedHealth: () => {},
  setCombinedHealth: () => {}
};

const GameContext = createContext(defaultValue);

export function GameProvider({ children }: any) {
  const [attackMode, setAttackMode] = useState(false)
  const [combinedHealth, setCombinedHealth] = useState(0);

  const updateCombinedHealth = (change : any) => {
    setCombinedHealth((prevHealth) => prevHealth + (change / 2));
  };



  console.log(combinedHealth)

  useEffect(() => {
    if (combinedHealth < 1) {
      console.log('Next level')
    } 
  }, [combinedHealth])


  return (
    <GameContext.Provider value={{ attackMode, setAttackMode, updateCombinedHealth, setCombinedHealth }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}