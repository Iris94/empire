'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import { RootState } from "../GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import DiceRoll from "../components/math/gameplayScripting/DiceRoll";
import AutoStatsIncrement from "../components/math/playerScripting/AutoStatsIncrement";
import { setLevel } from "../GlobalRedux/Features/level/levelSlice";
import DeathScreen from "../components/sideScreens/DeathScreen";
import { setPlayerAttack, setPlayerHealth, setPlayerMana, setPlayerPoints } from "../GlobalRedux/Features/player/playerSlice";


interface GameContextType {
  attackMode: boolean;
  nextLevel: boolean;
  playerTurnBased: boolean;
  rollWhoStartFirst: string;
  playerHealth: number;
  playerMana: number;
  playerAttack: number;
  playerPoints: number;
  playerArmor: number;
  maxPlayerHealth: number;
  generatedEnemies: any[];
  initialEnemyHP: any[];
  initialPlayerAP: number;
  playerCoordinates: number;
  deathScreen: boolean;
  selectedMap: any;
  setPlayerCoordinates: React.Dispatch<React.SetStateAction<number>>;
  setInitialPlayerAP: React.Dispatch<React.SetStateAction<number>>;
  setInitialEnemyHP: React.Dispatch<React.SetStateAction<any>>;
  setPlayerTurnBased: React.Dispatch<React.SetStateAction<any>>;
  setRollWhoStartFirst: React.Dispatch<React.SetStateAction<string>>;
  setNextLevel: React.Dispatch<React.SetStateAction<boolean>>;
  setAttackMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateGeneratedEnemies: (newEnemies: any) => void;
  updateGeneratedMap: (mapImages : any) => void;
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
  playerArmor: 0,
  maxPlayerHealth: 0,
  generatedEnemies: [],
  initialEnemyHP: [],
  initialPlayerAP: 0,
  playerCoordinates: 0,
  deathScreen: false,
  selectedMap: '',
  setPlayerCoordinates: () => {},
  setInitialPlayerAP: () => {},
  setInitialEnemyHP: () => {},
  setPlayerTurnBased: () => { },
  setRollWhoStartFirst: () => { },
  setNextLevel: () => { },
  setAttackMode: () => { },
  updateGeneratedEnemies: () => { },
  updateGeneratedMap: () => { }
};

const GameContext = createContext(defaultValue);

export function GameProvider({ children }: any) {
  const [attackMode, setAttackMode] = useState(false);
  const [generatedEnemies, setGeneratedEnemies] = useState([]);
  const [nextLevel, setNextLevel] = useState(false);
  const [rollWhoStartFirst, setRollWhoStartFirst] = useState('');
  const [playerTurnBased, setPlayerTurnBased] = useState(true);
  const [maxPlayerHealth, setMaxPlayerHealth] = useState(0);
  const [initialEnemyHP, setInitialEnemyHP] = useState([]);
  const [initialPlayerAP, setInitialPlayerAP] = useState(0);
  const [playerCoordinates, setPlayerCoordinates] = useState(0);
  const [deathScreen, setDeathScreen] = useState(false)
  const [selectedMap, setSelectedMap] = useState('')
  
  const { level } = useSelector((state: RootState) => state.levelReducer)
  const { playerAttack,
          playerHealth,
          playerMana,
          playerPoints,
          playerArmor } = useSelector((state: RootState) => state.player)
    
  const dispatch = useDispatch()
  const updatedPlayerStats = AutoStatsIncrement();
  
  const updateGeneratedEnemies = (newEnemies: any) => {
    setGeneratedEnemies(newEnemies);
  };

  const updateGeneratedMap = (mapImages : any) => {
    if (generatedEnemies.length === 0 || nextLevel) {
      const randomIndex = Math.floor(Math.random() * mapImages.length);
      const selectMap = mapImages[randomIndex];
      setSelectedMap(selectMap)
    }
  }
  
  useEffect(() => {
    if (playerHealth <= 0) {
      setDeathScreen(true)
    } else {
      setDeathScreen(false)
    }
  }, [playerHealth])
  
  useEffect(() => {
    setMaxPlayerHealth(playerHealth)
    setInitialPlayerAP(playerPoints)
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
      dispatch(setPlayerPoints(initialPlayerAP))
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
        playerArmor,
        maxPlayerHealth,
        generatedEnemies,
        initialEnemyHP,
        initialPlayerAP,
        playerCoordinates,
        deathScreen,
        selectedMap,
        setPlayerCoordinates,
        setInitialPlayerAP,
        setInitialEnemyHP,
        setPlayerTurnBased,
        setRollWhoStartFirst,
        setNextLevel,
        setAttackMode,
        updateGeneratedEnemies,
        updateGeneratedMap
      }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}