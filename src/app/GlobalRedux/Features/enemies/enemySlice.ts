'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface EnemyState {
    enemyHealth: number,
    enemyImage: any,
    enemyPoints: number,
    enemyClass: string,
}

const initialState: EnemyState = {
    enemyHealth: 100,
    enemyImage: '',
    enemyPoints: 0,
    enemyClass: ''
}

const enemySlice = createSlice({
    name: 'enemy',
    initialState,
    reducers: {
        setEnemyHealth: (state, action:PayloadAction<number>) => {
            state.enemyHealth = action.payload
        },
        setEnemyImage: (state, action:PayloadAction<any>) => {
            state.enemyImage = action.payload
        },
        setEnemyPoints: (state, action:PayloadAction<number>) => {
            state.enemyPoints = action.payload
        },
        setEnemyClass: (state, action:PayloadAction<string>) => {
            state.enemyClass = action.payload
        }
    }
})

export const {
    setEnemyClass,
    setEnemyHealth,
    setEnemyImage,
    setEnemyPoints
} = enemySlice.actions;

export default enemySlice.reducer