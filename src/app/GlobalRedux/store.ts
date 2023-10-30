'use client'

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import playerReducer from "./Features/player/playerSlice";
import levelReducer from "./Features/level/levelSlice";

const persistConfig = {
  key: "root",
  storage, 
};

const persistedReducer = persistReducer(persistConfig, playerReducer);

export const store = configureStore({
  reducer: {
    player: persistedReducer,
    levelReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false, // Disable serializableCheck middleware
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
