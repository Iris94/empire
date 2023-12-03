'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlayerState {
  playerClass: string;
  playerImage: any;
  playerHealth: number;
  playerMana: number;
  playerAttack: number;
  playerArmor: number;
  playerPoints: number;
}

const initialState: PlayerState = {
  playerClass: '',
  playerHealth: 0,
  playerMana: 0,
  playerAttack: 0,
  playerPoints: 0,
  playerArmor: 0,
  playerImage: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerClass: (state, action: PayloadAction<string>) => {
      state.playerClass = action.payload;
    },
    setPlayerImage: (state, action: PayloadAction<any>) => {
      state.playerImage = action.payload;
    },
    setPlayerHealth: (state, action: PayloadAction<number>) => {
      state.playerHealth = action.payload;
    },
    setPlayerMana: (state, action: PayloadAction<number>) => {
      state.playerMana = action.payload;
    },
    setPlayerAttack: (state, action: PayloadAction<number>) => {
      state.playerAttack = action.payload;
    },
    setPlayerArmor: (state, action: PayloadAction<number>) => {
      state.playerArmor = action.payload;
    },
    setPlayerPoints: (state, action: PayloadAction<number>) => {
      state.playerPoints = action.payload;
    },
  },
});

export const {
  setPlayerClass,
  setPlayerImage,
  setPlayerHealth,
  setPlayerMana,
  setPlayerAttack,
  setPlayerArmor,
  setPlayerPoints,
} = playerSlice.actions;

export default playerSlice.reducer;
