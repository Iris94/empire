'use client';

import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./Features/player/playerSlice";

export const store = configureStore({
    reducer: {
        player: playerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
