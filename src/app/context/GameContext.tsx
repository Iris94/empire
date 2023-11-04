'use client'

import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";


interface GameContextType {
  playerHP: number;
  attackMode: boolean;
  setAttackMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: GameContextType = {
  playerHP: 100,
  attackMode: false,
  setAttackMode: () => { },
};

const GameContext = createContext(defaultValue);

export function GameProvider({ children }: any) {
  const [attackMode, setAttackMode] = useState(false)

  const {
    playerHealth } = useSelector((state: RootState) => state.player)
  const [playerHP, setPlayerHP] = useState(playerHealth)


  return (
    <GameContext.Provider value={{ playerHP, attackMode, setAttackMode }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}