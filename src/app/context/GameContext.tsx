'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { RootState } from "../GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import AutoStatsIncrement from "../components/math/playerScripting/AutoStatsIncrement";
import { setLevel } from "../GlobalRedux/Features/level/levelSlice";
import { setPlayerAttack, setPlayerHealth, setPlayerMana } from "../GlobalRedux/Features/player/playerSlice";


interface GameContextType {
  attackMode: boolean;
  nextLevel: boolean;
  rollWhoStartFirst: string;
  playerHealth: number;
  playerMana: number;
  playerAttack: number;
  playerPoints: number;
  generatedEnemies: any [];
  setRollWhoStartFirst: React.Dispatch<React.SetStateAction<string>>;
  setNextLevel: React.Dispatch<React.SetStateAction<boolean>>;
  setAttackMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateGeneratedEnemies: (newEnemies : any) => void;
}

const defaultValue: GameContextType = {
  attackMode: false,
  nextLevel: false,
  rollWhoStartFirst: '',
  playerAttack: 0,
  playerHealth: 0,
  playerMana: 0,
  playerPoints: 0,
  generatedEnemies: [],
  setRollWhoStartFirst: () => { },
  setNextLevel: () => { },
  setAttackMode: () => { },
  updateGeneratedEnemies: () => {}
};

const GameContext = createContext(defaultValue);

export function GameProvider({ children }: any) {
  const [attackMode, setAttackMode] = useState(false);
  const [generatedEnemies, setGeneratedEnemies] = useState([]);
  const [nextLevel, setNextLevel] = useState(false);
  const [rollWhoStartFirst, setRollWhoStartFirst] = useState('')

  const { level } = useSelector((state: RootState) => state.levelReducer)
  const { playerAttack, 
          playerHealth, 
          playerMana,
          playerPoints } = useSelector((state: RootState) => state.player)

  const dispatch = useDispatch()

  const updatedPlayerStats = AutoStatsIncrement();

  const updateGeneratedEnemies = (newEnemies : any) => {
    setGeneratedEnemies(newEnemies);
  };

  useEffect(() => {
    if (nextLevel) {
      dispatch(setLevel(level + 1))
      dispatch(setPlayerAttack(updatedPlayerStats.playerAttack))
      dispatch(setPlayerHealth(updatedPlayerStats.playerHealth))
      dispatch(setPlayerMana(updatedPlayerStats.playerMana))
      setNextLevel(false)
    }
  }, [nextLevel])

  return (
    <GameContext.Provider 
    value={{  attackMode, 
              nextLevel,
              rollWhoStartFirst,
              playerAttack,
              playerHealth,
              playerMana,
              playerPoints,
              generatedEnemies,
              setRollWhoStartFirst,
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