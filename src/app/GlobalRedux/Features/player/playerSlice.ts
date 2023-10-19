'use client';

import { createSlice } from '@reduxjs/toolkit';


export interface PlayerState {
    playerClass: string;
    playerImage: any;
    playerHP: number;
    playerMana: number;
    playerAttack: number;
    playerPoints: number;
  }

  const initialState: PlayerState = {
    playerClass: '',
    playerHP: 0,
    playerMana: 0,
    playerAttack: 0,
    playerPoints: 0,
    playerImage: '',
  };

  const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerClass: (state, action) => {
            state.playerClass = action.payload;
          },
          setPlayerImage: (state, action) => {
            state.playerImage = action.payload;
          },
          setPlayerHP: (state, action) => {
            state.playerHP = action.payload;
          },
          setPlayerMana: (state, action) => {
            state.playerMana = action.payload;
          },
          setPlayerAttack: (state, action) => {
            state.playerAttack = action.payload;
          },
          setPlayerPoints: (state, action) => {
            state.playerPoints = action.payload;
          },
    }
  })

  export const {
    setPlayerClass,
    setPlayerImage,
    setPlayerHP,
    setPlayerMana,
    setPlayerAttack,
    setPlayerPoints,
  } = playerSlice.actions;
  
  export default playerSlice.reducer;