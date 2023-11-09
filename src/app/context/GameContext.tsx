'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { RootState } from "../GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../GlobalRedux/Features/level/levelSlice";


interface GameContextType {
  attackMode: boolean;
  nextLevel: boolean;
  generatedEnemies: any [];
  setNextLevel: React.Dispatch<React.SetStateAction<boolean>>;
  setAttackMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateGeneratedEnemies: (newEnemies : any) => void;
}

const defaultValue: GameContextType = {
  attackMode: false,
  nextLevel: false,
  generatedEnemies: [],
  setNextLevel: () => { },
  setAttackMode: () => { },
  updateGeneratedEnemies: () => {}
};

const GameContext = createContext(defaultValue);

export function GameProvider({ children }: any) {
  const [attackMode, setAttackMode] = useState(false);
  const [generatedEnemies, setGeneratedEnemies] = useState([]);
  const [nextLevel, setNextLevel] = useState(false);
  const { level } = useSelector((state: RootState) => state.levelReducer)
  const dispatch = useDispatch()

  const updateGeneratedEnemies = (newEnemies : any) => {
    setGeneratedEnemies(newEnemies);
  };
  
  useEffect(() => {
    if (nextLevel) {
      dispatch(setLevel(level + 1))
      setNextLevel(false)
    }
  }, [nextLevel])

  console.log(level)

  return (
    <GameContext.Provider 
    value={{  attackMode, 
              nextLevel,
              generatedEnemies,
              setNextLevel,
              setAttackMode, 
              updateGeneratedEnemies }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}