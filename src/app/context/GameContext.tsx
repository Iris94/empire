'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { RootState } from "../GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import DiceRoll from "../components/math/gameplayScripting/DiceRoll";
import AutoStatsIncrement from "../components/math/playerScripting/AutoStatsIncrement";
import { setLevel } from "../GlobalRedux/Features/level/levelSlice";
import { setPlayerAttack, setPlayerHealth, setPlayerMana } from "../GlobalRedux/Features/player/playerSlice";


interface GameContextType {
  attackMode: boolean;
  nextLevel: boolean;
  playerTurnBased: boolean;
  rollWhoStartFirst: string;
  playerHealth: number;
  playerMana: number;
  playerAttack: number;
  playerPoints: number;
  maxPlayerHealth: number;
  generatedEnemies: any[];
  initialEnemyHP: any[];
  setInitialEnemyHP: React.Dispatch<React.SetStateAction<any>>;
  setPlayerTurnBased: React.Dispatch<React.SetStateAction<any>>;
  setRollWhoStartFirst: React.Dispatch<React.SetStateAction<string>>;
  setNextLevel: React.Dispatch<React.SetStateAction<boolean>>;
  setAttackMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateGeneratedEnemies: (newEnemies: any) => void;
}

const defaultValue: GameContextType = {
  attackMode: false,
  nextLevel: false,
  playerTurnBased: true,
  rollWhoStartFirst: '',
  playerAttack: 0,
  playerHealth: 0,
  playerMana: 0,
  playerPoints: 0,
  maxPlayerHealth: 0,
  generatedEnemies: [],
  initialEnemyHP: [],
  setInitialEnemyHP: () => {},
  setPlayerTurnBased: () => { },
  setRollWhoStartFirst: () => { },
  setNextLevel: () => { },
  setAttackMode: () => { },
  updateGeneratedEnemies: () => { },
};

const GameContext = createContext(defaultValue);

export function GameProvider({ children }: any) {
  const [attackMode, setAttackMode] = useState(false);
  const [generatedEnemies, setGeneratedEnemies] = useState([]);
  const [nextLevel, setNextLevel] = useState(false);
  const [rollWhoStartFirst, setRollWhoStartFirst] = useState('');
  const [playerTurnBased, setPlayerTurnBased] = useState(true)
  const [maxPlayerHealth, setMaxPlayerHealth] = useState(0)
  const [initialEnemyHP, setInitialEnemyHP] = useState([]);

  const { level } = useSelector((state: RootState) => state.levelReducer)
  const { playerAttack,
    playerHealth,
    playerMana,
    playerPoints } = useSelector((state: RootState) => state.player)

  const dispatch = useDispatch()
  const updatedPlayerStats = AutoStatsIncrement();

  const updateGeneratedEnemies = (newEnemies: any) => {
    setGeneratedEnemies(newEnemies);
  };

  useEffect(() => {
    setMaxPlayerHealth(playerHealth)
    setPlayerTurnBased(true)
    const diceResults = DiceRoll(playerPoints, playerAttack, generatedEnemies);
    if (diceResults === 'player') {
      setRollWhoStartFirst('player');
      setPlayerTurnBased(true)
    } else {
      setRollWhoStartFirst('enemy');
      setPlayerTurnBased(false)
    }
  }, [rollWhoStartFirst]);

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
      value={{
        attackMode,
        nextLevel,
        playerTurnBased,
        rollWhoStartFirst,
        playerAttack,
        playerHealth,
        playerMana,
        playerPoints,
        maxPlayerHealth,
        generatedEnemies,
        initialEnemyHP,
        setInitialEnemyHP,
        setPlayerTurnBased,
        setRollWhoStartFirst,
        setNextLevel,
        setAttackMode,
        updateGeneratedEnemies,
      }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}